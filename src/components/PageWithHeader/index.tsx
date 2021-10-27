import React from 'react';
import { Grid } from '@material-ui/core';
import Header from '../Header';
import { Content } from './styles';

type props = {
  children: React.ReactNode;
  headerLink: string;
};

const PageWithHeader: React.FC<props> = ({ children, headerLink }: props) => {
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Header link={headerLink} />
      <Content>{children}</Content>
    </Grid>
  );
};

export default PageWithHeader;
