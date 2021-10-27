import React from 'react';
import { Route } from 'react-router-dom';
import CadastroAluno from '../Pages/Cadastro/CadastroAluno';
import DadosPessoais from '../Pages/Cadastro/DadosPessoais';
import MaisInformacoes from '../Pages/Cadastro/MaisInformacoes';
import InformacoesAcademicas from '../Pages/Cadastro/InformacoesAcadaemicas';
import Sobre from '../Pages/Cadastro/Sobre';
import SucessoCadastroAluno from '../Pages/Cadastro/SucessoCadastroAluno';
import Idiomas from '../Pages/Cadastro/Idiomas/index.js';
import Projetos from '../Pages/Cadastro/Projetos/index.js';
import EmpresasJunior from '../Pages/Cadastro/EmpresasJunior/index.js';
import NotasDisciplinas from '../Pages/Cadastro/NotasDisciplinas/index.js';
import CadastroConcluidoAluno from '../Pages/Cadastro/CadastroConcluidoAluno/index.js';
import TrabalhosVoluntarios from '../Pages/Cadastro/TrabalhosVoluntarios/index.js';
import AtivarAluno from '../Pages/Cadastro/AtivarAluno';
import ImagemPerfil from '../Pages/Cadastro/ImagemPerfil/index.js';

export const RoutesCadastroAluno: React.FC = () => {
  return (
    <>
      <Route
        path="/cadastro-estudante/cadastro"
        exact
        component={CadastroAluno}
      />
      <Route path="/cadastro-estudante/ativar" exact component={AtivarAluno} />
      <Route
        path="/cadastro-estudante/sucesso-inicial"
        exact
        component={SucessoCadastroAluno}
      />
      <Route
        path="/cadastro-estudante/dados-pessoais"
        exact
        component={DadosPessoais}
      />
      <Route
        path="/cadastro-estudante/informacoes-academicas"
        exact
        component={InformacoesAcademicas}
      />
      <Route
        path="/cadastro-estudante/mais-informacoes"
        exact
        component={MaisInformacoes}
      />
      <Route path="/cadastro-estudante/idiomas" exact component={Idiomas} />
      <Route path="/cadastro-estudante/projetos" exact component={Projetos} />
      <Route
        path="/cadastro-estudante/empresas-juniores"
        exact
        component={EmpresasJunior}
      />
      <Route
        path="/cadastro-estudante/notas-disciplinas"
        exact
        component={NotasDisciplinas}
      />
      <Route
        path="/cadastro-estudante/trabalhos-voluntarios"
        exact
        component={TrabalhosVoluntarios}
      />
      <Route
        path="/cadastro-estudante/imagem-perfil"
        exact
        component={ImagemPerfil}
      />
      <Route
        path="/cadastro-estudante/cadastro-concluido"
        exact
        component={CadastroConcluidoAluno}
      />
      <Route path="/cadastro-estudante/sobre" exact component={Sobre} />
    </>
  );
};
