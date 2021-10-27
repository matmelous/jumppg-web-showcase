/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
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
import { sendRecoveryEmail } from '../../services/api';
import Loader from '../../components/Loader';
import useLocalStorage from '../../hooks/useLocalStorage';

const LargeButton = withStyles(() => ({
  root: {
    width: '100%',
    fontWeight: 100,
    marginTop: '10px',
  },
}))(Button);

const SendRecoveryEmail: React.FunctionComponent = () => {
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
  const [showSuccess, setShowSuccess] = React.useState(false);

  function handleError(response: string): void {
    setApiError(true);
    if (typeof response === 'string') {
      setApiErrorMessage(response);
    } else {
      setApiErrorMessage(
        'Houve uma falha no nosso servicor, tente novamente mis tarde.',
      );
    }
  }
  function handleSubmit(e: { preventDefault: () => void }): void {
    e.preventDefault();
    if (mail.length > 0) {
      setShowLoading(true);
      setShowError(false);
      sendRecoveryEmail(mail).then((response) => {
        if (response.success) {
          setShowSuccess(true);
        } else {
          setShowLoginError(true);
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
            {showSuccess ? (
              <Container>
                <Typography variant="body1" gutterBottom className="success">
                  Um link de recuperação foi enviado para seu e-mail
                </Typography>
              </Container>
            ) : (
              <Container>
                <Typography variant="h4" gutterBottom>
                  Preencha seu e-mail para recuperar a senha
                </Typography>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                  <TextField
                    id="email"
                    label="E-mail"
                    variant="outlined"
                    onChange={handleChangeEmail}
                  />
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
                      E-mail não encontrado
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
                    Enviar
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

export default SendRecoveryEmail;
