/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, TextField, Typography, withStyles } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import {
  ContainerBox,
  Container,
  StyledLink,
  LineContainer,
  Title,
} from './styles';
import PageWithHeader from '../../components/PageWithHeader';
import google from '../../assets/Google.png';
import facebook from '../../assets/Facebook.png';
import { doLogin } from '../../services/api';
import Loader from '../../components/Loader';
import useLocalStorage from '../../hooks/useLocalStorage';
import { checkSession } from '../../services/apiSession';

const LargeButton = withStyles(() => ({
  root: {
    width: '100%',
    fontWeight: 100,
    marginTop: '10px',
  },
}))(Button);

const Home: React.FunctionComponent = () => {
  const history = useHistory();
  const [mail, setMail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showError, setShowError] = React.useState(false);
  const [showLoginError, setShowLoginError] = React.useState(false);
  const [showLoading, setShowLoading] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [token, setToken] = useLocalStorage('token', '');
  const [apiErrorMessage, setApiErrorMessage] = React.useState('');
  const [apiError, setApiError] = React.useState(false);

  useEffect(() => {
    if (token && token !== '') {
      checkSession(token).then((response) => {
        if (response.success && response.token && response.user) {
          setToken(response.token);
          switch (response.user.userType) {
            case 'admin':
              history.push('/admin');
              break;
            case 'company':
              history.push('/empresa');
              break;
            default:
              history.push('/estudante');
          }
        } else {
          setToken('');
        }
      });
    }
  }, [token]);

  function handleError(response: string): void {
    setApiError(true);
    if (typeof response === 'string') {
      setApiErrorMessage(response);
    } else {
      setApiErrorMessage(
        'Houve uma falha no nosso servidor, tente novamente mis tarde.',
      );
    }
  }
  function handleSubmit(e: { preventDefault: () => void }): void {
    e.preventDefault();
    if (mail.length > 0 && password.length > 0) {
      setShowLoading(true);
      setShowError(false);
      doLogin(mail, password).then((response) => {
        if (response.success && response.token && response.user) {
          setToken(response.token);
          switch (response.user.userType) {
            case 'student':
              history.push('/estudante/');
              break;
            case 'company':
              history.push('/empresa/');
              break;
            case 'admin':
              history.push('/admin/');
              break;
            default:
              history.push('/estudante/');
              break;
          }
        } else if (response.token) {
          setToken(response.token);
          setShowLoginError(true);
        } else if (response.error !== undefined) {
          handleError(response.error);
        }
        setShowLoading(false);
      });
    } else {
      setShowError(true);
    }
  }

  function handleChangeEmail(event: { target: { value: string } }): void {
    setMail(event.target.value);
    setShowLoginError(false);
  }
  const handleChangePassword = (event: { target: { value: string } }): void => {
    setPassword(event.target.value);
    setShowLoginError(false);
  };

  function showLoader(): JSX.Element {
    return (
      <ContainerBox className="containerBox">
        <Container>
          <Loader />
        </Container>
      </ContainerBox>
    );
  }

  return (
    <PageWithHeader headerLink="/">
      <Container>
        {showLoading ? (
          showLoader()
        ) : (
          <ContainerBox className="containerBox">
            <Container>
              <Typography variant="h4" gutterBottom>
                Preencha seus dados de acesso
              </Typography>
              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                  id="email"
                  label="E-mail"
                  variant="outlined"
                  onChange={handleChangeEmail}
                />
                <TextField
                  id="password"
                  label="Senha"
                  variant="outlined"
                  type="password"
                  onChange={handleChangePassword}
                />
                {showError && (
                  <Typography variant="body1" gutterBottom className="warning">
                    Preencha todos os campos
                  </Typography>
                )}
                {showLoginError && (
                  <Typography variant="body1" gutterBottom className="warning">
                    E-mail ou Senha incorretos
                  </Typography>
                )}
                {apiError && (
                  <Typography variant="body1" gutterBottom className="warning">
                    {apiErrorMessage}
                  </Typography>
                )}
                <LargeButton
                  onClick={handleSubmit}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Entrar
                </LargeButton>
              </form>
              <Link to="/recuperar-senha/enviar">
                <StyledLink>Clique aqui se você esqueceu sua senha</StyledLink>
              </Link>
            </Container>
            {/* <Container>
              <Title>Ou entre com</Title>
              <LineContainer>
                <p>
                  <img src={google} alt="Entrar com Google" />
                  <img src={facebook} alt="Entrar com Facebook" />
                </p>
              </LineContainer>
            </Container> */}
          </ContainerBox>
        )}
      </Container>
    </PageWithHeader>
  );
};

export default Home;
