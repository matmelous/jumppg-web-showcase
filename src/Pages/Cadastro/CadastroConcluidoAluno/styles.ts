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
  text-align: center;
  margin-bottom: 20px;

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
  width: 80%;
  background-color: ${(props) => props.theme.palette.primary.background};

  .MuiInputBase-formControl {
    margin-bottom: 2em;
  }
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

export const StyledItem = styled.div`
  padding: 1em 2em;
  margin: 1em;
  border-radius: 1em;
  background-color: #3f51b5;
  color: #fff;
`;

export const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
