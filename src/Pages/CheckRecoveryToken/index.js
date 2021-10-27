/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { Button, TextField, Typography, withStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
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
import { checkRecoveryToken, updatePassword } from '../../services/api';
import Loader from '../../components/Loader';
import useLocalStorage from '../../hooks/useLocalStorage';
import { PASSWORD } from '../../constants/form';

const LargeButton = withStyles(() => ({
  root: {
    width: '100%',
    fontWeight: 100,
    marginTop: '10px',
  },
}))(Button);

const CheckRecoveryToken = (props) => {
  const history = useHistory();
  const [mail, setMail] = React.useState('');
  const [showError, setShowError] = React.useState(false);
  const [showLoginError, setShowLoginError] = React.useState(false);
  const [showLoading, setShowLoading] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [token, setToken] = useLocalStorage('token', '');
  const [apiErrorMessage, setApiErrorMessage] = React.useState('');
  const [apiError, setApiError] = React.useState(false);
  const [showCheckError, setShowCheckError] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [password, setPassword] = React.useState('');
  const [passwordRepeat, setPasswordRepeat] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordRepeatError, setPasswordRepeatError] = React.useState(false);
  const [isMissingToken, setIsMissingToken] = React.useState(false);

  const checkPassword = (password1, password2) => {
    if (password1.length < 8 || password1 === '') {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (password2 !== '') {
      if (password1 !== password2) {
        setPasswordRepeatError(true);
      } else {
        setPasswordRepeatError(false);
      }
    } else {
      setPasswordRepeatError(false);
    }
  };
  const handleChangePassword = (e) => {
    if (e) {
      setPassword(e.target.value);
      checkPassword(e.target.value, passwordRepeat);
    }
  };
  const handleChangePasswordRepeat = (event) => {
    setPasswordRepeat(event.target.value);
    checkPassword(password, event.target.value);
  };
  function getErrorMessage() {
    if (password !== passwordRepeat && passwordRepeat !== '') {
      return PASSWORD.DIFFERENT;
    }
    if (password.length < 8) {
      return PASSWORD.LENGTH;
    }
    return '';
  }

  function passwordField() {
    return (
      <TextField
        value={password}
        id="password"
        label="Crie uma nova senha"
        variant="outlined"
        type="password"
        error={passwordError}
        helperText={getErrorMessage()}
        onChange={handleChangePassword}
      />
    );
  }
  function repeatPasswordField() {
    return (
      <TextField
        value={passwordRepeat}
        id="confirmPassword"
        label="Confirme a senha"
        variant="outlined"
        type="password"
        error={passwordRepeatError}
        helperText={getErrorMessage()}
        onChange={handleChangePasswordRepeat}
      />
    );
  }

  function handleError(response) {
    setApiError(true);
    if (typeof response === 'string') {
      setApiErrorMessage(response);
    } else {
      setApiErrorMessage(
        'Houve uma falha no nosso servicor, tente novamente mis tarde.',
      );
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (password.length > 0 && passwordRepeat.length > 0) {
      setShowError(false);
      setShowLoading(true);
      updatePassword(token, password, user.email).then((response) => {
        setShowLoading(false);
        if (response.success) {
          setToken(response.token);
          history.push('/estudante/');
        } else if (response.error !== undefined) {
          handleError(response.error);
        }
      });
    } else {
      setShowError(true);
    }
  }

  function showLoader() {
    return (
      <ContainerBox className="containerBox">
        <Container>
          <Loader />
        </Container>
      </ContainerBox>
    );
  }

  useEffect(() => {
    async function checkToken() {
      setShowLoading(true);
      const { search } = props.location;
      const params = new URLSearchParams(search);
      const urlToken = params.get('token');
      if (urlToken) {
        checkRecoveryToken(urlToken).then((response) => {
          if (response.success && response.token) {
            // setRedirect(true);
            setToken(response.token);
            setUser(response.user);
            // history.push('/cadastro-estudante/dados-pessoais');
          } else {
            setShowCheckError(true);
            // setRedirect(false);
          }
          setShowLoading(false);
        });
      } else {
        // setRedirect(false)s;
        setShowLoading(false);
        setIsMissingToken(true);
      }
    }
    checkToken();
  }, []);

  function showMissingToken() {
    return (
      <ContainerBox className="containerBox">
        <Container>
          <Typography variant="body1" gutterBottom className="warning">
            Está faltando o token de recuperação de senha!
          </Typography>
        </Container>
      </ContainerBox>
    );
  }

  return (
    <PageWithHeader headerLink="/estudante/">
      <Container>
        {showLoading ? (
          showLoader()
        ) : isMissingToken ? (
          showMissingToken()
        ) : (
          <ContainerBox className="containerBox">
            {showCheckError ? (
              <Container>
                <Typography variant="body1" gutterBottom className="warning">
                  O token informado não é válido.
                </Typography>
              </Container>
            ) : (
              <Container>
                <Typography variant="h4" gutterBottom>
                  Bem vindo {user.nome}!
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Crie uma nova senha para recuperar seu acesso!
                </Typography>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                  {passwordField()}
                  {repeatPasswordField()}
                  {showError && (
                    <Typography
                      variant="body1"
                      gutterBottom
                      className="warning"
                    >
                      Preencha todos os campos
                    </Typography>
                  )}
                  {showLoginError && (
                    <Typography
                      variant="body1"
                      gutterBottom
                      className="warning"
                    >
                      O token expirou!
                    </Typography>
                  )}
                  {apiError && (
                    <Typography
                      variant="body1"
                      gutterBottom
                      className="warning"
                    >
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
              </Container>
            )}
          </ContainerBox>
        )}
      </Container>
    </PageWithHeader>
  );
};

export default CheckRecoveryToken;
