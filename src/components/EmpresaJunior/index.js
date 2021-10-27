import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { ContainerBox, RemoveWrapper } from './styles';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const EmpresaJunior = ({
  handleClick,
  showButton,
  name,
  description,
  handleName,
  handleDescription,
  handleRemove,
  index,
}) => {
  const button = () => {
    return (
      <Button variant="contained" className="largeButton" onClick={handleClick}>
        Adicionar Empresa
      </Button>
    );
  };

  const addMoreButton = () => {
    return showButton ? button() : <></>;
  };

  return (
    <ContainerBox className="containerBox">
      <RemoveWrapper>
        <RemoveCircleOutlineIcon
          onClick={() => {
            handleRemove(index);
          }}
        />
      </RemoveWrapper>
      <TextField
        id="name"
        defaultValue={name}
        onChange={(e) => {
          handleName(e, index);
        }}
        label="Nome do Empresa Junior"
        variant="outlined"
      />

      <TextField
        id="outlined-multiline-static"
        multiline
        rows={3}
        label="Descrição"
        variant="outlined"
        defaultValue={description}
        onChange={(e) => {
          handleDescription(e, index);
        }}
      />

      {addMoreButton()}
    </ContainerBox>
  );
};

export default EmpresaJunior;
