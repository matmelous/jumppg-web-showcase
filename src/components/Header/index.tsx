import React from 'react';
import { Container, Strip } from './styles';
import logo from '../../assets/Jump pg transparente.png';

type props = {
  link: string;
};

const Header: React.FunctionComponent<props> = ({ link }: props) => {
  return (
    <Container>
      <a href={link}>
        <img alt="test" src={logo} />
      </a>
      <Strip />
    </Container>
  );
};

export default Header;
