import React from 'react';
import { useTranslation } from 'react-i18next';

import p1 from 'src/assets/partners/1.png';
import p2 from 'src/assets/partners/2.png';
import p3 from 'src/assets/partners/3.png';
import p4 from 'src/assets/partners/4.png';
import p5 from 'src/assets/partners/5.png';
import p6 from 'src/assets/partners/6.png';
import p7 from 'src/assets/partners/7.png';
import p8 from 'src/assets/partners/8.png';

const partners = [
  { src: p2 },
  { src: p1 },
  { src: p3 },
  { src: p4 },
  { src: p5 },
  { src: p6 },
  { src: p7 },
  { src: p8 },
];

export const Partners: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div id="partners">
      <h2 className="title">{t('navPartners')}</h2>
      <div className="flex flex-wrap items-center justify-center gap-16 my-16 md:justify-around">
        {partners.map((partner, index) => (
          <img
            key={index}
            className="max-w-[200px] object-contain"
            src={partner.src}
            alt={partner.src}
          />
        ))}
      </div>
    </div>
  );
};
