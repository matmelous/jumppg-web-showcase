import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { ContainerBox, RemoveWrapper } from './styles';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const Projeto = ({
  handleClick,
  showButton,
  selectedName,
  selectedDescription,
  handleName,
  handleDescription,
  handleRemove,
  index,
}) => {
  const button = () => {
    return (
      <Button variant="contained" className="largeButton" onClick={handleClick}>
        Adicionar Projeto
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
        defaultValue={selectedName}
        onChange={(e) => {
          handleName(e, index);
        }}
        label="Nome do Projeto"
        variant="outlined"
      />

      <TextField
        id="outlined-multiline-static"
        multiline
        rows={3}
        label="Descrição"
        variant="outlined"
        defaultValue={selectedDescription}
        onChange={(e) => {
          handleDescription(e, index);
        }}
      />

      {addMoreButton()}
    </ContainerBox>
  );
};

export default Projeto;
