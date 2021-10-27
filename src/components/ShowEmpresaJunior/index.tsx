/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

type props = {
  name: string;
  description: string;
};

const ShowEmpresaJunior: React.FC<props> = ({ name, description }: props) => {
  const [showData, setShowData] = React.useState(false);
  const datawrapperClass = showData ? 'active' : '';
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={`dataWrapper ${datawrapperClass}`}
      onClick={() => {
        setShowData(!showData);
      }}
    >
      <p>{name}</p>
      <p
        style={{ display: showData ? 'block' : 'none' }}
        className="description"
      >
        {description}
      </p>
    </div>
  );
};

export default ShowEmpresaJunior;
