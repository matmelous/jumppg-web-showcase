import styled from 'styled-components';

export const LineContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  p {
    display: flex;
    width: 50%;
    justify-content: space-around;

    img {
      cursor: pointer;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 100%;

    .MuiFormControl-root {
      width: 100%;
      margin-top: 1rem;
    }
  }
`;

export const ContainerBox = styled.div`
  display: flex;
  padding: 3rem;
  flex-direction: column;
  box-shadow: 0 4px 4px #000;
  position: relative;
  width: 400px;
  text-align: center;
  background-color: ${(props) => props.theme.palette.primary.background};
`;

export const StyledLink = styled.p`
  color: ${(props) => props.theme.palette.primary.main};
  text-decoration: underline;
  cursor: pointer;
`;

export const Title = styled.p`
  position: relative;
  width: 100%;
  text-align: center;

  :before,
  :after {
    content: '';
    width: 35%;
    height: 1px;
    background-color: #000;
    position: absolute;
    top: 50%;
  }
  :before {
    left: 0;
  }
  :after {
    right: 0;
  }
`;
