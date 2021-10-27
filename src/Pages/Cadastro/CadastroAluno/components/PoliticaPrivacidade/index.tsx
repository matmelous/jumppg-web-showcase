/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { Typography } from '@material-ui/core';
import { Container, Wrapper, Background } from './styles';
import logo from '../../../../../assets/logo.png';

type props = {
  handleBlur: () => void;
};

const PoliticaPrivacidade: React.FunctionComponent<props> = ({
  handleBlur,
}: props) => {
  return (
    <Wrapper>
      <Background onClick={handleBlur} />
      <Container>
        <img alt="test" src={logo} />
        <Typography variant="body1" gutterBottom>
          <p>
            A missão da JUMPPG é conectar os estudantes e as empresas de Ponta
            Grossa. Para nós, é fundamental sermos transparentes sobre os dados
            pessoais que coletamos a seu respeito, sobre como eles são usados e
            com quem os compartilhamos.
          </p>
          <p>
            <b>
              Ao utilizar os nossos Serviços, você concorda com todos estes
              termos. A sua utilização dos Serviços da JUMPPG está sujeita a
              nossa Política de Privacidade, que abrangem o modo como coletamos,
              utilizamos, compartilhamos e armazenamos suas informações
              pessoais.
            </b>
          </p>
          <p>
            Esta Política de Privacidade se aplica quando você utiliza os nossos
            Serviços (descritos a seguir).
          </p>
          <p>
            <b>1. Dados que coletamos</b>
          </p>
          <p>1.1 Dados que você nos fornece</p>
          <p>Você fornece seus dados para criar uma conta na JUMPPG.</p>
          <p>1.2 Cadastro</p>
          <p>
            Para criar uma conta, você fornece dados que incluem seu nome,
            endereço de e-mail e/ou número do dispositivo móvel e uma senha.
          </p>
          <p>
            Você cria seu Perfil na JUMPPG (um perfil completo permite melhor
            aproveitar nossos Serviços)
          </p>
          <p>1.3 Perfil</p>
          <p>
            Você tem controle sobre as informações inseridas no seu perfil, tais
            como sua formação acadêmica, experiência profissional, competências,
            foto e etc. Você pode escolher se deseja incluir informações
            confidenciais no seu perfil e tornar tais informações visíveis á
            empresas. Não publique nem adicione ao perfil dados pessoais que não
            queira disponibilizar.
          </p>
          <p>
            <b>2. Como usamos seus dados</b>
          </p>
          <p>
            Usamos seus dados para fornecer, oferecer suporte, personalizar e
            desenvolver nossos Serviços.
          </p>
          <p>
            Utilizamos os dados que temos sobre você para fornecer e
            personalizar nossos Serviços, incluindo com a ajuda de sistemas
            automatizados e inferências que fazemos, para que nossos Serviços
            (incluindo anúncios) possam ser mais relevantes e úteis para você e
            outras pessoas.
          </p>
          <p>
            Todos os dados que você incluir no seu perfil poderão ser
            visualizados por empresas ou por clientes pagantes.
          </p>
          <p>2.1 Perfil</p>
          <p>
            O seu perfil fica completamente visível a todos os clientes pagantes
            de nossos Serviços.
          </p>
          <p>2.2 Alteração no controle ou venda.</p>
          <p>
            Poderemos compartilhar seus dados caso nossa empresa seja vendida
            para terceiros, mas eles precisarão continuar sendo usados de acordo
            com esta Política de Privacidade.
          </p>
          <p>2.3 Direitos para acessar e controlar seus dados pessoais.</p>
          <p>
            Você também pode acessar ou excluir seus dados pessoais. Nós
            oferecemos a você diversas opções de como seus dados são coletados.
          </p>
          <p>2.4 Retenção de dados</p>
          <p>
            Manteremos a maioria dos seus dados pessoais enquanto a sua conta
            estiver ativa.
          </p>
          <p>2.5 Encerramento da conta.</p>
          <p>Excluiremos seus dados após encerramento da conta.</p>
          <p>2.6 Segurança.</p>
          <p>Nós monitoramos e tentamos impedir falhas na segurança.</p>
          <p>2.7 Prestadores de serviços</p>
          <p>
            Podemos contratar terceiros para nos auxiliar em nossos Serviços.
          </p>
          <p>
            Você concorda que, ao criar uma conta ou utilizar nossos serviços,
            você está ciente com a nossa política. Caso não concorde, NÃO clique
            em “Cadastre-se agora” (ou semelhante) e não acesse ou, de outra
            forma, utilize nossos Serviços.
          </p>
        </Typography>
      </Container>
    </Wrapper>
  );
};

export default PoliticaPrivacidade;
