import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 136px;
  justify-content: center;
  align-items: center;

  img {
    height: 87px;
    width: 341px;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;

    img {
      height: 4em;
      width: auto;
    }
  }

  @media (min-width: 800px) {
    align-items: flex-start;
  }
`;

export const Strip = styled.div`
  position: absolute;
  top: 136px;
  left: 0;
  width: 100%;
  height: 158px;
  background-color: ${(props) => props.theme.palette.primary.main};
`;

Strip.defaultProps = {
  theme: {
    palette: {
      primary: {
        main: '#5F16E9',
      },
    },
  },
};
