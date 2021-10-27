import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  cursor: pointer;
  display: flex;
  justify-content: center;
  overflow: auto;
  top: 0;
  left: 0;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  cursor: default;
  margin: 2em auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  position: relative;
  text-align: center;
  border: 6px solid #5b18e7;
  border-bottom-width: 20px;
  border-top-width: 20px;
  border-radius: 7%;
  padding: 0 2em;
  background-color: #fff;

  .how-it-works {
    font-size: 20px;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: -15px;
    z-index: 1;
  }

  img {
    height: 5em;
    width: auto;
  }

  p {
    margin-top: 0;
  }

  .list {
    p {
      font-weight: bold;
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  .howItWorks {
    margin-top: 2em;
    color: blue;
    text-decoration: none;

    .MuiTypography-body1 {
      font-weight: bold;
    }
  }
`;

export const ContainerBox = styled.div`
  display: flex;
  padding: 3rem;
  flex-direction: column;
  border: 1px solid #6200ee;
  box-shadow: 0 4px 4px #000;
  width: 100%;
  box-sizing: border-box;

  button {
    font-weight: bold;
    text-transform: unset;
    text-spacing: 0.5rem;
  }

  a {
    text-decoration: none !important;
  }

  .btnCadastrar {
    color: #fff;
    background-color: #018459;
  }

  .btnCadastrar:hover {
    background-color: #2e7d32;
  }

  @media only screen and (max-width: 600px) {
    box-shadow: unset;
    border: unset;

    img {
      width: 100%;
    }
  }
`;
