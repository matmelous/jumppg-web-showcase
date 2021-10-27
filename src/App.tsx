import React from 'react';
import { ThemeProvider } from 'styled-components';
import './index.css';
import { Routes } from './routes';

const theme = {
  '.warning': {
    background: '#f0ad4e',
  },
  palette: {
    primary: {
      main: '#5F16E9',
      background: '#FFF',
    },
    secondary: {
      main: '#01A299',
    },
  },
};

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};
