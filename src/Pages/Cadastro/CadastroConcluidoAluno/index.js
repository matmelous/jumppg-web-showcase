import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { ContainerBox, Container, StyledItem, DataWrapper } from './styles';
import PageWithHeader from '../../../components/PageWithHeader';

import useLocalStorage from '../../../hooks/useLocalStorage';
import { readStudentAllData } from '../../../services/api';
import ShowIdioma from '../../../components/ShowIdioma/index';
import ShowProjeto from '../../../components/ShowProjeto';
import ShowTrabalhoVoluntario from '../../../components/ShowTrabalhoVoluntario';
import ShowNotaDisciplina from '../../../components/ShowNotaDisciplina';
import ShowEmpresaJunior from '../../../components/ShowEmpresaJunior';

import Loader from '../../../components/Loader';

import { Nationalities } from '../DadosPessoais/data';
import { Institutions, Areas, Years } from '../InformacoesAcadaemicas/data';

const SucessoCadastroAluno = () => {
  const history = useHistory();
  const [token, setToken] = useLocalStorage('token', '');
  const [loading, setLoading] = useState(true);
  const [student, setStudent] = useLocalStorage('student', '{}');
  const [showError, setShowError] = React.useState(false);
  const [showApiError, setShowApiError] = React.useState(false);

  useEffect(() => {
    if (student.nome === undefined) {
      async function checkPersonalData() {
        setLoading(true);
        readStudentAllData(token)
          .then((response) => {
            setLoading(false);

            if (response.token !== undefined && response.token !== '') {
              setToken(response.token);
            } else {
              setShowApiError(true);
            }

            if (response.success) {
              console.log(response);
              setStudent(JSON.stringify(response.user));
              history.push('/estudante');
            } else {
              setShowApiError(true);
            }
          })
          .catch(() => {
            setLoading(false);
            setShowApiError(true);
          });
      }
      checkPersonalData();
    } else {
      console.log(student);
      setLoading(false);
    }
  }, []);

  function showLoader() {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  useEffect(() => {
    if (student.softskills !== undefined) {
      console.log(student.softskills);
      console.log(JSON.parse(student.softskills));
    }
    console.log(Nationalities);
    console.log(Nationalities[student.nacionalidade]);
  }, [student]);

  return (
    <PageWithHeader headerLink="/estudante/">
      <Container>
        <ContainerBox className="containerBox">
          <Typography variant="h4" gutterBottom>
            Seja bem-vindo {student.nome} !
          </Typography>
          {loading ? (
            showLoader()
          ) : (
            <DataWrapper>
              <Container>
                <Typography variant="h5" align="left">
                  Dados Pessoais
                </Typography>
                <Typography variant="body1" align="left">
                  <p>Nome: {student.nome} </p>
                  <p>E-mail: {student.email} </p>
                  <p>sexo: {student.sexo} </p>
                  <p>Celular: {student.celular} </p>
                  <p>Nacionalidade: {Nationalities[student.nacionalidade]} </p>
                  <p>Idade: {student.idade} </p>
                  <p>Linkedin: {student.linkedin} </p>
                  <p>Biografia: {student.biografia} </p>
                </Typography>
              </Container>

              <Container>
                <Typography variant="h5" align="left">
                  Informações Acadêmicas
                </Typography>
                <Typography variant="body1" align="left">
                  <p>Instituição: {Institutions[student.instituicao]} </p>
                  <p>Area: {Areas[student.area]} </p>
                  <p>Ano: {Years[student.ano]} </p>
                </Typography>
              </Container>
              <Container>
                <Typography variant="h5" align="center">
                  Cursos técnicos
                </Typography>
                <div>
                  {student.cursos !== undefined &&
                    JSON.parse(student.cursos).map((curso, index) => (
                      <StyledItem key={'curso' + index}>{curso}</StyledItem>
                    ))}
                </div>
              </Container>

              <Container>
                <Typography variant="h5" align="center">
                  HardSkills
                </Typography>
                <div>
                  {student.hardskills !== undefined &&
                    JSON.parse(student.hardskills).map((skills, index) => (
                      <StyledItem key={'hard' + index}>{skills}</StyledItem>
                    ))}
                </div>
              </Container>
              <Container>
                <Typography variant="h5" align="center">
                  SoftSkills
                </Typography>
                <div>
                  {student.softskills !== undefined &&
                    JSON.parse(student.softskills).map((skills, index) => (
                      <StyledItem key={'soft' + index}>{skills}</StyledItem>
                    ))}
                </div>
              </Container>

              <Container>
                <Typography variant="h5" align="center">
                  Outros Idiomas
                </Typography>
                {student.languages !== undefined &&
                  student.languages.map((language, index) => (
                    <ShowIdioma
                      key={index}
                      language={language.idioma}
                      proficiency={language.proficiencia}
                    />
                  ))}
              </Container>
              <Container>
                <Typography variant="h5" align="center">
                  Projetos de extensão
                </Typography>
                {student.projects !== undefined &&
                  student.projects.map((project, index) => (
                    <ShowProjeto
                      key={index}
                      name={project.nome}
                      description={project.descricao}
                    />
                  ))}
              </Container>
              <Container>
                <Typography variant="h5" align="center">
                  Empresas Juniores
                </Typography>
                {student.juniorCompanies !== undefined &&
                  student.juniorCompanies.map((company, index) => (
                    <ShowEmpresaJunior
                      key={index}
                      name={company.nome}
                      description={company.descricao}
                    />
                  ))}
              </Container>
              <Container>
                <Typography variant="h5" align="center">
                  Notas de disciplinas
                </Typography>
                {student.disciplineNotes !== undefined &&
                  student.disciplineNotes.map((notes, index) => (
                    <ShowNotaDisciplina
                      key={index}
                      name={notes.nome}
                      note={notes.nota}
                    />
                  ))}
              </Container>
              <Container>
                <Typography variant="h5" align="center">
                  Trabalhos Voluntarios
                </Typography>
                {student.volunteerWorks !== undefined &&
                  student.volunteerWorks.map((work, index) => (
                    <ShowTrabalhoVoluntario
                      key={index}
                      name={work.nome}
                      description={work.descricao}
                    />
                  ))}
              </Container>
            </DataWrapper>
          )}
        </ContainerBox>
      </Container>
    </PageWithHeader>
  );
};

export default SucessoCadastroAluno;
