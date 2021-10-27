import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { ContainerBox, Container } from './styles';
import PageWithHeader from '../../../components/PageWithHeader';
import { activateStudent } from '../../../services/api';
import Loader from '../../../components/Loader';
import useLocalStorage from '../../../hooks/useLocalStorage';

type propsType = {
  location: { search: string };
};

const AtivarAluno: React.FunctionComponent<propsType> = (props: propsType) => {
  const [redirect, setRedirect] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [token, setToken] = useLocalStorage('token', '');
  const history = useHistory();

  function notValid(): JSX.Element {
    return (
      <PageWithHeader headerLink="/">
        <Container>
          <ContainerBox className="containerBox">
            <Container>
              <Typography variant="h4" gutterBottom>
                O Token não é valido!
              </Typography>
            </Container>
          </ContainerBox>
        </Container>
      </PageWithHeader>
    );
  }

  function loader(): JSX.Element {
    return (
      <PageWithHeader headerLink="/">
        <Container>
          <ContainerBox className="containerBox">
            <Container>
              <Loader />
            </Container>
          </ContainerBox>
        </Container>
      </PageWithHeader>
    );
  }

  useEffect(() => {
    async function checkToken(): Promise<void> {
      const { search } = props.location;
      const params = new URLSearchParams(search);
      const urlToken = params.get('token');
      if (urlToken) {
        activateStudent(urlToken).then((response) => {
          if (response.success && response.token) {
            setRedirect(true);
            setToken(response.token);
            history.push('/cadastro-estudante/dados-pessoais');
          } else {
            setRedirect(false);
          }
          setLoading(false);
        });
      }
    }
    checkToken();
  }, [history, props, setToken]);

  return <>{(loading && loader()) || (!redirect && notValid())}</>;
};

export default AtivarAluno;
