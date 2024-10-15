import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import p1 from 'src/assets/partners/1.png';
import p2 from 'src/assets/partners/2.png';
import p3 from 'src/assets/partners/3.png';
import p4 from 'src/assets/partners/4.png';
import p5 from 'src/assets/partners/5.png';
import p6 from 'src/assets/partners/6.png';
import p7 from 'src/assets/partners/8.png';
import p8 from 'src/assets/partners/9.png';
import p9 from 'src/assets/partners/10.png';
import p10 from 'src/assets/partners/11.png';

const partners = [
  { src: p1, alt: 'General Motors' },
  { src: p2, alt: 'Artel' },
  { src: p3, alt: 'AutoGlass' },
  { src: p4, alt: 'AVDN' },
  { src: p5, alt: 'AVTOYNA' },
  { src: p6, alt: 'AUTOPODBOR' },
  { src: p7, alt: 'Prime Auto LTD' },
  { src: p8, alt: 'CAR Wings' },
  { src: p9, alt: 'HANGLASS' },
  { src: p10, alt: 'ASL PROF' },
];

export const Partners: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div id="partners">
      <h2 className="title">{t('navPartners')}</h2>
      <div className="hidden grid-cols-7 gap-5 py-4 md:grid">
        {partners.map((partner, index) => (
          <img key={index} className="max-w-[100px]" src={partner.src} alt={partner.alt} />
        ))}
      </div>
      <Swiper
        className="block py-4 mySwiper md:hidden"
        rewind
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            <img key={index} className="max-w-[100px]" src={partner.src} alt={partner.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
