/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { Typography } from '@material-ui/core';
import { Container, Wrapper, Background } from './styles';
import logo from '../../../assets/logo.png';

type props = {
  handleBlur: () => void;
};

const HowItWorks: React.FunctionComponent<props> = ({ handleBlur }: props) => {
  return (
    <Wrapper>
      <Background onClick={handleBlur} />
      <Container>
        <Typography variant="h3" gutterBottom className="how-it-works">
          COMO FUNCIONA A
        </Typography>
        <img alt="test" src={logo} />
        <Typography variant="body1" gutterBottom>
          <p>
            A Jump PG é uma plataforma que conecta os estudantes com as
            empresas. Nosso objetivo é ajudar os estudantes a obterem
            experiência mesmo durante o período acadêmico.
          </p>
          <p>
            É notável a dificuldade para se conseguir um estágio. Poucos o
            conseguem. Por isso, incentivamos os estudantes a servirem
            voluntariamente em empresas na cidade de Ponta Grossa.
          </p>
          <p>
            Esse serviço voluntário será voltado para ganho de experiência. Não
            terá remuneração e nenhum vínculo empregatício. Fornecemos um modelo
            de termo de adesão, que aconselhamos ambas as partes a assinarem.
          </p>

          <p>Com um serviço voluntário, o estudante pode:</p>
          <div className="list">
            <p>- ganhar experiência antes de se formar</p>
            <p>- aumentar o network</p>
            <p>- servir voluntariamente em empresas de sua área</p>
            <p>- conheçer novas áreas</p>
            <p>- invistir tempo no seu futuro</p>
            <p>- prestar serviço em horários flexíveis com suas aulas</p>
          </div>
          <p> A EXPERIÊNCIA É UM DIFERENCIAL ENTRE OS ESTUDANTES</p>
          <p> Faça o seu cadastro!</p>
        </Typography>
      </Container>
    </Wrapper>
  );
};

export default HowItWorks;
