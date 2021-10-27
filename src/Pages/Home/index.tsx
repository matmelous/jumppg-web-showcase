/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect } from 'react';
import { Box, Button, Typography, withStyles } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Container, ContainerBox } from './styles';
import Page from '../../components/Commons/Page';
import logo from '../../assets/logo.png';
import HowItWorks from './HowItWorks';
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
  const [token, setToken] = useLocalStorage('token', '');
  const [showHowItWorks, setShowHowItWorks] = React.useState(false);

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

  return (
    <>
      <Page>
        <Container>
          <img alt="logo" src={logo} />
          <ContainerBox className="containerBox">
            <Link to="/Login">
              <Box>
                <LargeButton variant="contained" color="primary">
                  Entrar
                </LargeButton>
              </Box>
            </Link>
            <Link to="/cadastro-estudante/cadastro">
              <LargeButton variant="contained" className="btnCadastrar">
                Criar nova conta
              </LargeButton>
            </Link>
          </ContainerBox>
          <Typography
            variant="body1"
            gutterBottom
            className="howItWorks"
            onClick={() => {
              setShowHowItWorks(!showHowItWorks);
            }}
          >
            COMO FUNCIONA?
          </Typography>
        </Container>
      </Page>
      {showHowItWorks && (
        <HowItWorks
          handleBlur={() => {
            setShowHowItWorks(!showHowItWorks);
          }}
        />
      )}
    </>
  );
};

export default Home;
