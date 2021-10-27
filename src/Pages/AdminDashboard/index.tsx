/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import ListIcon from '@material-ui/icons/List';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { useHistory } from 'react-router-dom';
import Dashboard from '../../components/Dashboard/index.js';
import { SidebarProfile, SidebarIcon } from './styles';
import { FullLoaderWrapper } from '../StudentDashboard/styles';
import Loader from '../../components/Loader';
import CadastroEmpresa from './CadastroEmpresa';
import iconVagas from '../../assets/icon-vagas.png';
import ListaEmpresas from './ListaEmpresas';
import { userLogout } from '../../services/apiSession';

import defaultImage from '../../assets/profile.jpg';
import useLocalStorage from '../../hooks/useLocalStorage';

const AdminDashboard: React.FunctionComponent = () => {
  const history = useHistory();
  const [token, setToken] = useLocalStorage('token', '');
  const [actualPage, setActualPage] = React.useState('');
  const [fulllLoading, setFullLoading] = React.useState(false);
  const [showApiError, setShowApiError] = React.useState(false);

  function renderFullLoader(): JSX.Element {
    return (
      <FullLoaderWrapper>
        <Loader />
      </FullLoaderWrapper>
    );
  }

  function handleLogout(): void {
    setFullLoading(true);
    userLogout(token)
      .then(() => {
        setFullLoading(false);
        setToken('');
        history.push('/login');
      })
      .catch(() => {
        setFullLoading(false);
        setShowApiError(true);
      });
  }

  function renderSidebar(): JSX.Element {
    return (
      <>
        <SidebarProfile>
          <div
            className="imageWrapper"
            style={{
              backgroundImage: `url('${defaultImage}')`,
            }}
          />
          <div className="nameWrapper">Administrador</div>
        </SidebarProfile>
        <SidebarIcon
          className={actualPage === 'cadastroEmpresa' ? ' selected ' : ''}
          onClick={() => {
            setActualPage('cadastroEmpresa');
          }}
        >
          <img alt="Cadastrar Empresa" src={iconVagas} className="icon" />
          <p>Cadastrar Empresa</p>
        </SidebarIcon>
        <SidebarIcon
          className={actualPage === 'listarEmpresas' ? ' selected ' : ''}
          onClick={() => {
            setActualPage('listarEmpresas');
          }}
        >
          <ListIcon className="icon" />
          <p>Listar Empresas</p>
        </SidebarIcon>
        <SidebarIcon onClick={handleLogout}>
          <PowerSettingsNewIcon className="icon logout" />
          <p>Sair</p>
        </SidebarIcon>
      </>
    );
  }

  function renderContent(): JSX.Element {
    switch (actualPage) {
      case 'cadastroEmpresa':
        return <CadastroEmpresa />;
        break;
      case 'listarEmpresas':
        return <ListaEmpresas />;
        break;

      default:
        return <></>;
        break;
    }
  }

  return (
    <>
      <Dashboard sidebarChildren={renderSidebar()}>{renderContent()}</Dashboard>
      {fulllLoading && renderFullLoader()}
    </>
  );
};

export default AdminDashboard;
