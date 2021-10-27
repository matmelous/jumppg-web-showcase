import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  position: relative;

  .howItWorks {
    margin-top: 2em;
    color: blue;
    text-decoration: none;
    cursor: pointer;

    font-weight: bold;

    @media only screen and (max-width: 600px) {
      font-size: 0.8em;
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
    padding-bottom: 0;

    img {
      width: 100%;
    }
  }
`;
