import React from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import { ContainerBox, RemoveWrapper } from './styles';
import { Languages, Proficiencies } from './data';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { orderArray } from '../../utils';

const Idioma = ({
  handleClick,
  showButton,
  selectdLanguage,
  selectedProciency,
  handleLanguages,
  handleProficiency,
  handleRemove,
  index,
}) => {
  const orderedLanguages = orderArray(Languages);
  const orderedProficiencies = orderArray(Proficiencies);

  const button = () => {
    return (
      <Button variant="contained" className="largeButton" onClick={handleClick}>
        Adicionar Idioma
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
      <FormControl>
        <InputLabel id="laguages-label">Idioma</InputLabel>
        <Select
          labelId="laguages-label"
          id="laguages"
          value={selectdLanguage}
          onChange={(e) => {
            handleLanguages(e, index);
          }}
        >
          {orderedLanguages.map((object) => {
            return (
              <MenuItem value={object[0]} key={object[0]}>
                {object[1]}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="proficiency-label">Proficiência</InputLabel>
        <Select
          labelId="proficiency-label"
          id="proficiency"
          value={selectedProciency}
          onChange={(e) => {
            handleProficiency(e, index);
          }}
        >
          {orderedProficiencies.map((object) => {
            return (
              <MenuItem value={object[0]} key={object[0]}>
                {object[1]}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {addMoreButton()}
    </ContainerBox>
  );
};

export default Idioma;
