import React from 'react';

type props = {
  name: string;
  note: string;
};

const ShowNotaDisciplina: React.FC<props> = ({ name, note }: props) => {
  return (
    <p>
      {name} - {note}
    </p>
  );
};

export default ShowNotaDisciplina;
