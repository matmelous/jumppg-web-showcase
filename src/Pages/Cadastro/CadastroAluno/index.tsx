/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-alert */
import React from 'react';
import { Button, TextField, Typography, withStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {
  ContainerBox,
  Container,
  LineContainer,
  Title,
  StyledLink,
} from './styles';
import PageWithHeader from '../../../components/PageWithHeader';
// import google from '../../../assets/Google.png';
// import facebook from '../../../assets/Facebook.png';
import { PASSWORD } from '../../../constants/form';
import { setStudent } from '../../../services/api';
import useLocalStorage from '../../../hooks/useLocalStorage';
import Loader from '../../../components/Loader';
import PoliticaPrivacidade from './components/PoliticaPrivacidade';

const LargeButton = withStyles(() => ({
  root: {
    width: '100%',
    fontWeight: 100,
    marginTop: '10px',
  },
}))(Button);

const Home: React.FunctionComponent = () => {
  const history = useHistory();
  const [name, setName] = React.useState('');
  const [mail, setMail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordRepeat, setPasswordRepeat] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordRepeatError, setPasswordRepeatError] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);

  const [loading, setLoading] = React.useState(false);
  const [apiErrorMessage, setApiErrorMessage] = React.useState('');
  const [apiError, setApiError] = React.useState(false);
  const [token, setToken] = useLocalStorage('token', '');

  function isEmail(val: string): boolean {
    const regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEmail.test(val)) {
      return true;
    }
    return false;
  }

  const checkPassword = (
    password1: React.SetStateAction<string>,
    password2: React.SetStateAction<string>,
  ): void => {
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
  const handleChangePassword = (
    e: { target: { value: React.SetStateAction<string> } } | undefined,
  ): void => {
    if (e) {
      setPassword(e.target.value);
      checkPassword(e.target.value, passwordRepeat);
    }
  };
  const handleChangePasswordRepeat = (event: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    setPasswordRepeat(event.target.value);
    checkPassword(password, event.target.value);
  };
  function getErrorMessage(): string {
    if (password !== passwordRepeat && passwordRepeat !== '') {
      return PASSWORD.DIFFERENT;
    }
    if (password.length < 8) {
      return PASSWORD.LENGTH;
    }
    return '';
  }

  function passwordField(): JSX.Element {
    return (
      <TextField
        value={password}
        id="password"
        label="Crie uma senha"
        variant="outlined"
        type="password"
        error={passwordError}
        helperText={getErrorMessage()}
        onChange={handleChangePassword}
      />
    );
  }
  function repeatPasswordField(): JSX.Element {
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
  function checkMail(value: string): void {
    setEmailError(!isEmail(value));
  }
  function handleChangeEmail(event: { target: { value: string } }): void {
    setMail(event.target.value);
    checkMail(event.target.value);
  }

  function handleChangeName(event: { target: { value: string } }): void {
    setName(event.target.value);
  }

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
    if (
      name.length > 0 &&
      mail.length > 0 &&
      isEmail(mail) &&
      password.length > 0 &&
      passwordRepeat.length > 0
    ) {
      setShowError(false);
      setLoading(true);
      setStudent(name, mail, password).then((response) => {
        setLoading(false);
        if (response.success && response.token) {
          setToken(response.token);
          history.push('/cadastro-estudante/sucesso-inicial');
        } else if (response.error !== undefined) {
          if (response.token) {
            setToken(response.token);
          }
          handleError(response.error);
        }
      });
    } else {
      setShowError(true);
    }
  }

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
    <>
      <PageWithHeader headerLink="/">
        <Container>
          {loading ? (
            showLoader()
          ) : (
            <ContainerBox className="containerBox">
              <Container>
                <Typography variant="h4" gutterBottom>
                  Criar sua conta
                </Typography>
                <form noValidate autoComplete="off">
                  <TextField
                    id="name"
                    label="Nome Completo"
                    variant="outlined"
                    onChange={handleChangeName}
                  />
                  <TextField
                    id="mail"
                    label="E-mail"
                    variant="outlined"
                    onChange={handleChangeEmail}
                    helperText={emailError ? 'Preencha um e-mail valido' : ''}
                    error={emailError}
                  />
                  {passwordField()}
                  {repeatPasswordField()}

                  {showError && (
                    <Typography
                      variant="body1"
                      gutterBottom
                      className="warning"
                    >
                      Preencha todos os campos corretamente!
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
                  <Typography
                    variant="body1"
                    gutterBottom
                    className="privacyPolicy"
                  >
                    Ao clicar em continuar você concorda com a{' '}
                    <StyledLink
                      className="privacyLink"
                      onClick={() => {
                        setShowPrivacyPolicy(!showPrivacyPolicy);
                      }}
                    >
                      politica de privacidade
                    </StyledLink>
                  </Typography>

                  <LargeButton
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    type="submit"
                  >
                    Continuar
                  </LargeButton>
                </form>
              </Container>
              {/*
            <Container>
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

      {showPrivacyPolicy && (
        <PoliticaPrivacidade
          handleBlur={() => {
            setShowPrivacyPolicy(!showPrivacyPolicy);
          }}
        />
      )}
    </>
  );
};

export default Home;
