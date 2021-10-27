import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 88px;
  width: 100%;
  padding-bottom: 3rem;

  * {
    // box-sizing: border-box;
  }

  .MuiTypography-h4 {
    font-weight: bold;
    margin-bottom: 1em;
  }

  .MuiTypography-h5 {
    margin-bottom: 2em;
    font-size: 1.2em;
  }
  .MuiTypography-colorError,
  .warning {
    margin-top: 1em;
    border: 1px solid red;
    padding: 1em;
    border-radius: 4px;
  }

  .success {
    margin-top: 1em;
    color: green;
    border: 1px solid green;
    padding: 1em;
    border-radius: 4px;
  }

  @media only screen and (max-width: 600px) {
    .containerBox {
      width: 100%;
      box-sizing: border-box;
      box-shadow: unset;
    }
  }

  .MuiButton-containedPrimary {
    font-weight: bold;
  }
`;
