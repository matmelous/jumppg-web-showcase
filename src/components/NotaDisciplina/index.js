import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { ContainerBox, RemoveWrapper } from './styles';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const NotaDisciplina = ({
  handleClick,
  showButton,
  name,
  note,
  handleName,
  handleNote,
  handleRemove,
  index,
}) => {
  const button = () => {
    return (
      <Button variant="contained" className="largeButton" onClick={handleClick}>
        Adicionar Disciplina
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
        label="Nome da Disciplina"
        variant="outlined"
      />
      <TextField
        id="nota"
        defaultValue={note}
        onChange={(e) => {
          handleNote(e, index);
        }}
        label="Nota da Disciplina"
        variant="outlined"
      />

      {addMoreButton()}
    </ContainerBox>
  );
};

export default NotaDisciplina;
