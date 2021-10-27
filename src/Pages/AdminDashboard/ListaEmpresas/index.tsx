/* eslint-disable no-alert */
/* eslint-disable camelcase */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Title, Wrapper, Container } from './styles';
import Loader from '../../../components/Loader';
import {
  listCompanies,
  deleteCompany,
  activateCompany,
} from '../../../services/apiCompany';
import useLocalStorage from '../../../hooks/useLocalStorage';
import Empresa from './components/Empresa/index';

type companyType = {
  nome: string;
  id: number;
  deleted_at: string;
};
const CadastroEmpresa: React.FunctionComponent = () => {
  const history = useHistory();
  const [token, setToken] = useLocalStorage('token', '');
  const [companies, setCompanies] = useState<[companyType]>();
  const [loading, setLoading] = useState(false);

  const [showApiError, setShowApiError] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState('');
  const deactivateMessage =
    'Empresa desativada com sucesso, atualizando lista...';
  const activateMessage = 'Empresa ativada com sucesso, atualizando lista...';

  function showLoader(): JSX.Element {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  async function loadData(requestToken: string): Promise<void> {
    setLoading(true);
    listCompanies(requestToken)
      .then((response) => {
        // eslint-disable-next-line no-debugger
        if (response.token !== undefined && response.token !== '') {
          setToken(response.token);
        } else {
          setShowApiError(true);
        }

        if (response.success) {
          setCompanies(response.data);
        } else {
          setShowApiError(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setShowApiError(true);
      });
  }

  React.useEffect(() => {
    loadData(token);
  }, []);

  useEffect(() => {
    if (showApiError) {
      setTimeout(() => {
        history.push('/login');
      }, 1000);
    }
  }, [showApiError]);

  const handleDelete = (id: number, status: boolean): void => {
    setLoading(true);

    if (status) {
      setSuccessMessage(activateMessage);
      if (window.confirm('Deseja realmente ativar a empresa?')) {
        activateCompany(token, id).then((response) => {
          if (response.token !== undefined && response.token !== '') {
            setToken(response.token);
            if (response.success) {
              setShowSuccess(true);
              setTimeout(() => {
                setShowSuccess(false);
              }, 3000);
              setLoading(false);

              loadData(response.token);
            } else {
              setShowError(true);
            }
          }
        });
      }
    } else if (window.confirm('Deseja realmente desativar a empresa?')) {
      setSuccessMessage(deactivateMessage);
      deleteCompany(token, id).then((response) => {
        if (response.token !== undefined && response.token !== '') {
          setToken(response.token);
          if (response.success) {
            setShowSuccess(true);
            setTimeout(() => {
              setShowSuccess(false);
            }, 3000);
            setLoading(false);

            loadData(response.token);
          } else {
            setShowError(true);
          }
        }
      });
    }
  };

  return (
    <Wrapper>
      <Title>
        <Typography
          variant="h4"
          gutterBottom
          className="title"
          onClick={() => {
            setShowSuccess(false);
          }}
        >
          Empresas Cadastradas
        </Typography>
      </Title>

      {showSuccess && (
        <Typography variant="body1" gutterBottom className="success">
          {successMessage}
        </Typography>
      )}
      {showError && (
        <Typography variant="body1" gutterBottom className="warning">
          Preencha todos os campos
        </Typography>
      )}
      {loading ? (
        showLoader()
      ) : (
        <div>
          {companies &&
            companies.map((company: companyType) => (
              <Empresa
                key={company.id}
                nome={company.nome}
                id={company.id}
                active={company.deleted_at === null}
                handleDelete={handleDelete}
              />
            ))}
        </div>
      )}
    </Wrapper>
  );
};

export default CadastroEmpresa;
