import styled from 'styled-components';

const Page = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;

  @media only screen and (max-width: 600px) {
    img {
      width: 100%;
    }
  }
`;

export default Page;
