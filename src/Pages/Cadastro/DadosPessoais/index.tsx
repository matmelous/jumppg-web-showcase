/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { ContainerBox, Container } from './styles';
import PageWithHeader from '../../../components/PageWithHeader';
import { Nationalities } from './data';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { readStudent, updateStudentPersonalData } from '../../../services/api';
import Loader from '../../../components/Loader';

const LargeButton = withStyles(() => ({
  root: {
    width: '100%',
    fontWeight: 100,
    marginTop: '10px',
  },
}))(Button);

const DadosPessoais: React.FunctionComponent = () => {
  const history = useHistory();
  const [token, setToken] = useLocalStorage('token', '');
  const [phone, setPhone] = React.useState('');
  const [age, setAge] = React.useState('');
  const [sex, setSex] = React.useState('');
  const [nationality, setNationality] = React.useState('');
  const [showError, setShowError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [showApiError, setShowApiError] = React.useState(false);

  const orderedNationalities = Nationalities.sort((a, b) => {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  });

  const handleSex = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setSex(event.target.value as string);
  };

  const handleNationality = (
    event: React.ChangeEvent<{ value: unknown }>,
  ): void => {
    setNationality(event.target.value as string);
  };

  function handleChangePhone(event: { target: { value: string } }): void {
    setPhone(event.target.value);
  }
  function handleChangeAge(event: { target: { value: string } }): void {
    setAge(event.target.value);
  }

  useEffect(() => {
    async function checkPersonalData(): Promise<void> {
      setLoading(true);

      readStudent(token)
        .then((response) => {
          if (response.success) {
            setToken(response.token);
            if (response.user.celular !== null) {
              setPhone(response.user.celular);
            }
            if (response.user.idade !== null) {
              setAge(response.user.idade);
            }
            if (response.user.sexo !== null) {
              setSex(response.user.sexo);
            }
            if (response.user.nacionalidade !== null) {
              setNationality(response.user.nacionalidade);
            }
          } else {
            setToken(response.token);
          }
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setShowApiError(true);
        });
    }
    checkPersonalData();
  }, []);

  useEffect(() => {
    if (showApiError) {
      setTimeout(() => {
        history.push('/login');
      }, 1000);
    }
  }, [showApiError]);

  function handleSubmit(e: { preventDefault: () => void }): void {
    e.preventDefault();
    setLoading(true);
    if (phone !== '' && age !== '' && sex !== '' && nationality !== '') {
      setShowError(false);
      updateStudentPersonalData(phone, age, sex, nationality, token)
        .then((response) => {
          setLoading(false);

          setToken(response.token);
          if (response.success) {
            history.push('/cadastro-estudante/informacoes-academicas');
          } else {
            setShowApiError(true);
          }
        })
        .catch(() => {
          setLoading(false);
          setShowApiError(true);
        });
    } else {
      setLoading(false);
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
    <PageWithHeader headerLink="/estudante/">
      <Container>
        {loading ? (
          showLoader()
        ) : (
          <ContainerBox className="containerBox">
            <Container>
              <Typography variant="h4" gutterBottom>
                Dados Pessoais
              </Typography>
              <Typography variant="h5" gutterBottom>
                Os dados a seguir serão disponibilizados para as empresas
                entrarem em contato com você.
              </Typography>
              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                  id="cellphone"
                  label="Celular"
                  variant="outlined"
                  defaultValue={phone}
                  onChange={handleChangePhone}
                />
                <FormControl>
                  <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sex}
                    onChange={handleSex}
                  >
                    <MenuItem value={0}>Masculino</MenuItem>
                    <MenuItem value={1}>Feminino</MenuItem>
                    <MenuItem value={3}>Prefiro Não Informar</MenuItem>
                  </Select>
                </FormControl>

                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Nacionalidade
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={nationality}
                    onChange={handleNationality}
                  >
                    {orderedNationalities.map((object) => {
                      return (
                        <MenuItem key={object[0]} value={object[0]}>
                          {object[1]}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>

                <TextField
                  id="age"
                  label="Idade"
                  variant="outlined"
                  onChange={handleChangeAge}
                  defaultValue={age}
                />

                {showError && (
                  <Typography variant="body1" gutterBottom className="warning">
                    Preencha todos os campos
                  </Typography>
                )}
                {showApiError && (
                  <Typography variant="body1" gutterBottom className="warning">
                    Houve uma falha ao salvar suas informações. Faça login
                    novamente.
                  </Typography>
                )}
                <LargeButton
                  variant="contained"
                  type="submit"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Continuar
                </LargeButton>
              </form>
            </Container>
          </ContainerBox>
        )}
      </Container>
    </PageWithHeader>
  );
};

export default DadosPessoais;
