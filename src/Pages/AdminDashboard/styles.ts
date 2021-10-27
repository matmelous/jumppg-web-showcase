import styled from 'styled-components';

export const SidebarProfile = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  cursor: pointer;

  &.selected {
    background-color: #000;
  }

  .imageWrapper {
    width: 90px;
    height: 90px;
    border-radius: 90px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
  }

  .nameWrapper {
    color: #fff;
    padding-top: 1em;
    text-transform: uppercase;
    font-size: 1em;
  }
`;

export const LoaderWrapper = styled.div`
  background-color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3em;
  width: 90px;
  height: 90px;
  border-radius: 90px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  margin-left: 1.5em;

  &.selected {
    background-color: #000;
  }

  > div {
    transform: scale(0.5);
  }
`;

export const SidebarIcon = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1em;
  // padding-bottom: 1em;
  cursor: pointer;

  &.selected {
    background-color: #000;
  }

  :hover {
    background-color: #000;
  }

  .icon {
    width: 90px;
    height: 90px;
    color: #fff;
  }

  p {
    color: #fff;
    text-transform: uppercase;
    font-size: 1em;
    margin: 0;
    text-align: center;
  }
`;
