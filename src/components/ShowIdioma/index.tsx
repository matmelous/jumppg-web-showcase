import React from 'react';
import { Languages, Proficiencies } from './data';

type props = {
  language: number;
  proficiency: number;
};

const ShowIdioma: React.FC<props> = ({ language, proficiency }: props) => {
  return (
    <p>
      {Languages[language]} -{Proficiencies[proficiency]}
    </p>
  );
};

export default ShowIdioma;
