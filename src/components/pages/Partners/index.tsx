import React from 'react';
import Slider, { Settings } from 'react-slick';
import { useTranslation } from 'react-i18next';

import p1 from 'src/assets/partners/1.png';
import p2 from 'src/assets/partners/2.png';
import p3 from 'src/assets/partners/3.png';
import p4 from 'src/assets/partners/4.png';
import p5 from 'src/assets/partners/5.png';
import p6 from 'src/assets/partners/6.png';
import p7 from 'src/assets/partners/7.png';
import p8 from 'src/assets/partners/8.png';
import p9 from 'src/assets/partners/9.png';
import p10 from 'src/assets/partners/10.png';
import p11 from 'src/assets/partners/11.png';

const partners = [
  { src: p1, alt: 'General Motors' },
  { src: p2, alt: 'Artel' },
  { src: p3, alt: 'AutoGlass' },
  { src: p4, alt: 'AVDN' },
  { src: p5, alt: 'AVTOYNA' },
  { src: p6, alt: 'AUTOPODBOR' },
  { src: p7, alt: 'AUTO OYNA' },
  { src: p8, alt: 'Prime Auto LTD' },
  { src: p9, alt: 'CAR Wings' },
  { src: p10, alt: 'HANGLASS' },
  { src: p11, alt: 'ASL PROF' },
];

export const Partners: React.FC = () => {
  const { t } = useTranslation();

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 1700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1700,
    centerMode: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="partners">
      <h2 className="title">{t('navPartners')}</h2>
      <div className="block md:hidden">
        <Slider {...settings} className="py-6">
          {partners.map((partner, index) => (
            <img key={index} className="max-w-[100px]" src={partner.src} alt={partner.alt} />
          ))}
        </Slider>
      </div>
      <div className="flex-wrap items-center justify-center hidden gap-8 mb-5 md:flex">
        {partners.map((partner, index) => (
          <img key={index} className="max-w-[100px]" src={partner.src} alt={partner.alt} />
        ))}
      </div>
    </div>
  );
};
