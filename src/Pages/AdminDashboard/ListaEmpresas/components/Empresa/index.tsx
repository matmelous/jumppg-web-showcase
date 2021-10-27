import React from 'react';
import { Typography, FormControlLabel, Switch } from '@material-ui/core';
import * as S from './styles';

type props = {
  nome: string;
  id: number;
  active: boolean;
  handleDelete: (id: number, status: boolean) => void;
};

const Empresa: React.FunctionComponent<props> = ({
  nome,
  id,
  active,
  handleDelete,
}: props) => {
  function handleChange(): void {
    handleDelete(id, !active);
  }
  return (
    <S.Wrapper>
      <S.Company>
        <Typography variant="h6">{nome}</Typography>
        <FormControlLabel
          control={
            <Switch
              checked={active}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="Status"
        />
      </S.Company>
    </S.Wrapper>
  );
};

export default Empresa;
