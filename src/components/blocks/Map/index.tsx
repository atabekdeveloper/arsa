import React from 'react';

import map from 'src/assets/images/Uzbekistan.svg';

export const Map: React.FC = () => {
  return (
    <div className="container">
      <img className="max-w-full" src={map} alt="Uzbekistan" />
    </div>
  );
};
