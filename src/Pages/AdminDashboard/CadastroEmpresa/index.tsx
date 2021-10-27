import React, { useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { Title, Wrapper, Container } from './styles';
import { PASSWORD } from '../../../constants/form';
import Loader from '../../../components/Loader';
import { createCompany } from '../../../services/apiCompany';
import useLocalStorage from '../../../hooks/useLocalStorage';

const CadastroEmpresa: React.FunctionComponent = () => {
  const [token, setToken] = useLocalStorage('token', '');
  const [fantasyName, setFantasyName] = useState('');
  const [email, setEmail] = useState('');
  const [socialReason, setSocialReason] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [phone, setPhone] = useState('');
  const [CNPJ, setCNPJ] = useState('');
  const [stateRegistration, setStateRegistration] = useState('');
  const [municipalRegistration, setMunicipalRegistration] = useState('');
  const [address, setAddress] = useState('');
  const [CEP, setCEP] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [password, setPassword] = React.useState('');
  const [passwordRepeat, setPasswordRepeat] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordRepeatError, setPasswordRepeatError] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [apiErrorMessage, setApiErrorMessage] = React.useState('');
  const [apiError, setApiError] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);

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

  function resetForm(): void {
    setFantasyName('');
    setEmail('');
    setSocialReason('');
    setCellPhone('');
    setPhone('');
    setCNPJ('');
    setStateRegistration('');
    setMunicipalRegistration('');
    setAddress('');
    setCEP('');
    setCity('');
    setState('');
    setPassword('');
    setPasswordRepeat('');
    setPasswordError(false);
    setPasswordRepeatError(false);
  }

  function handleSubmit(e: { preventDefault: () => void }): void {
    e.preventDefault();
    /* if (
      fantasyName.length > 0 &&
      email.length > 0 &&
      socialReason.length > 0 &&
      cellPhone.length > 0 &&
      phone.length > 0 &&
      CNPJ.length > 0 &&
      stateRegistration.length > 0 &&
      municipalRegistration.length > 0 &&
      address.length > 0 &&
      CEP.length > 0 &&
      city.length > 0 &&
      state.length > 0 &&
      password.length > 0 &&
      passwordRepeat.length > 0
    ) { */
    setShowError(false);
    setLoading(true);
    createCompany(
      token,
      fantasyName,
      email,
      socialReason,
      cellPhone,
      phone,
      CNPJ,
      stateRegistration,
      municipalRegistration,
      address,
      CEP,
      city,
      state,
      password,
    ).then((response) => {
      setLoading(false);
      if (response.success) {
        setToken(response.token);
        setShowSuccess(true);
        resetForm();
        setTimeout(() => {
          setShowSuccess(false);
        }, 10000);
      } else if (response.error !== undefined) {
        handleError(response.error);
      }
    });
    /*
    } else {
      setShowError(true);
    } */
  }

  function showLoader(): JSX.Element {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  function renderSuccess(): JSX.Element {
    return (
      <Typography
        variant="body1"
        gutterBottom
        className="success"
        onClick={() => setShowSuccess(false)}
      >
        Empresa cadastrada com sucesso!
      </Typography>
    );
  }

  return (
    <Wrapper>
      <Title>
        <Typography variant="h4" gutterBottom className="title">
          Cadastrar Empresa
        </Typography>
      </Title>
      {loading ? (
        showLoader()
      ) : (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          {showSuccess && renderSuccess()}
          <TextField
            id="fantasyName"
            label="Nome Fantasia"
            variant="outlined"
            value={fantasyName}
            onChange={(event) => {
              setFantasyName(event.target.value);
            }}
          />
          <TextField
            id="socialReason"
            label="Razão Social"
            variant="outlined"
            value={socialReason}
            onChange={(event) => {
              setSocialReason(event.target.value);
            }}
          />
          <TextField
            id="cnpj"
            label="CNPJ"
            variant="outlined"
            value={CNPJ}
            onChange={(event) => {
              setCNPJ(event.target.value);
            }}
          />
          <TextField
            id="ie"
            label="Inscrição Estadual"
            variant="outlined"
            value={stateRegistration}
            onChange={(event) => {
              setStateRegistration(event.target.value);
            }}
          />
          <TextField
            id="im"
            label="Inscrição Municipal"
            variant="outlined"
            value={municipalRegistration}
            onChange={(event) => {
              setMunicipalRegistration(event.target.value);
            }}
          />
          <TextField
            id="cellphone"
            label="celular"
            variant="outlined"
            value={cellPhone}
            onChange={(event) => {
              setCellPhone(event.target.value);
            }}
          />
          <TextField
            id="phone"
            label="telefone"
            variant="outlined"
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
          <TextField
            id="address"
            label="Endereço"
            variant="outlined"
            value={address}
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
          <TextField
            id="cep"
            label="CEP"
            variant="outlined"
            value={CEP}
            onChange={(event) => {
              setCEP(event.target.value);
            }}
          />
          <TextField
            id="city"
            label="Cidade"
            variant="outlined"
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
          <TextField
            id="state"
            label="Estado"
            variant="outlined"
            value={state}
            onChange={(event) => {
              setState(event.target.value);
            }}
          />
          <TextField
            id="mail"
            label="E-mail"
            variant="outlined"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          {passwordField()}
          {repeatPasswordField()}

          {showError && (
            <Typography variant="body1" gutterBottom className="warning">
              Preencha todos os campos
            </Typography>
          )}
          {apiError && (
            <Typography variant="body1" gutterBottom className="warning">
              {apiErrorMessage}
            </Typography>
          )}
          {showSuccess && renderSuccess()}
          <Button
            type="submit"
            value="Cadastrar"
            variant="contained"
            color="primary"
          >
            Cadastrar
          </Button>
        </form>
      )}
    </Wrapper>
  );
};

export default CadastroEmpresa;
