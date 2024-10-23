import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import p1 from 'src/assets/images/partners/1.png';
import p2 from 'src/assets/images/partners/2.png';
import p3 from 'src/assets/images/partners/3.png';
import p4 from 'src/assets/images/partners/4.png';
import p5 from 'src/assets/images/partners/5.png';
import p6 from 'src/assets/images/partners/6.png';
import p7 from 'src/assets/images/partners/7.png';
import p8 from 'src/assets/images/partners/8.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const partners = [p2, p1, p3, p4, p5, p6, p7, p8];

export const Partners: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="partners" className="container">
      <h2 className="title">{t('navPartners')}</h2>
      <div className="flex-wrap items-center justify-center hidden gap-16 my-16 md:flex md:justify-around">
        {partners.map((partner, index) => (
          <LazyLoadImage
            key={index}
            className="max-w-[200px] object-contain"
            src={partner}
            alt={partner}
          />
        ))}
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="py-10 md:hidden"
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            <LazyLoadImage className="max-w-[200px] object-contain" src={partner} alt={partner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
