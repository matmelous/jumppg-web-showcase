import React from 'react';
import { Button, TextField } from '@material-ui/core';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { ContainerBox, RemoveWrapper } from './styles';

const TrabalhoVoluntario = ({
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
        Adicionar Trabalho Voluntário
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
        label="Nome do Trabalho Voluntário"
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

export default TrabalhoVoluntario;
