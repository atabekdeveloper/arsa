import React from 'react';

import map from 'src/assets/images/Uzbekistan.svg';

export const Map: React.FC = () => {
  return (
    <div className="container relative mb-10" data-aos="zoom-in">
      <img className="max-w-full" src={map} alt="Uzbekistan" />
      <div className="static text-center lg:absolute lg:text-left bottom-24 left-24 text-primary">
        <h3 className="text-xl font-bold md:text-2xl">Bizning korxona</h3>
        <p className="text-base md:text-lg">O'zbekistonning barcha hududini qamrab olgan</p>
      </div>
    </div>
  );
};
