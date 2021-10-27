import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;

  .MuiTypography-colorError,
  .warning {
    margin-top: 1em;
    border: 1px solid red;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 4px;
  }

  .success {
    margin-top: 1em;
    margin-bottom: 1em;
    color: green;
    border: 1px solid green;
    padding: 1em;
    border-radius: 4px;
  }
`;

export const SidebarWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  padding-bottom: 4em;
  box-sizing: border-box;
`;

export const Sidebar = styled.div`
  position: relative;
  width: 170px;
  overflow-y: auto;
  height: 100%;
  background-color: #5e17eb;

  @media only screen and (max-width: 800px) {
    width: 100%;
    z-index: 2;

    &.closed {
      width: 2em;
    }
  }
`;

export const Open = styled.div`
  svg {
    color: #fff;
    margin: 0.2em;
  }
`;

export const Close = styled.div`
  @media only screen and (max-width: 600px) {
    background-color: #00000070;
    position: relative;
    right: 0;
    height: 100%;
    top: 0;
    width: 100%;

    &.closed {
      display: none;
    }
    z-index: 2;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2em 4em;
  box-sizing: border-box;
  overflow-y: scroll;

  @media only screen and (max-width: 600px) {
    padding: 2em 1em;
    position: absolute;
    top: 0;
    padding-left: 4em;
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 1.5em;
    width: auto;
  }
`;
