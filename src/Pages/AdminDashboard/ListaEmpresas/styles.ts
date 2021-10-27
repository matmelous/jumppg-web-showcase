import styled from 'styled-components';

export const Title = styled.div`
  position: relative;
  width: 100%;
  font-weight: 600;
  margin-bottom: 2em;

  .MuiTypography-h4 {
    font-weight: bold;
    padding-bottom: 0.2em;
  }
  :after {
    content: '';
    width: 88%;
    height: 1px;
    background-color: #000;
    position: absolute;
    bottom: 0;
    left: 2px;
  }

  button {
    position: absolute;
    right: 0;
    bottom: -1.3em;
    font-size: 1.3em;
    font-weight: 100;
    span {
      padding: 0.2em 1em;
    }
  }
  
  @media only screen and (max-width: 800px) {

  button {
    bottom: 0.0em;
  }


`;
export const Wrapper = styled.div`
  form {
    width: 80%;
    display: flex;
    flex-direction: column;

    .MuiFormControl-root {
      margin-bottom: 1em;
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

    .warning {
      color: #ff0000;
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
  background-color: ${(props) => props.theme.palette.primary.background};
`;
