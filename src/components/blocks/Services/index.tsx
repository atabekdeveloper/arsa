import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Autoplay } from 'swiper/modules';
import { PaginationOptions } from 'swiper/types';
import { useTranslation } from 'react-i18next';

import s1 from 'src/assets/images/services/1.jpg';
import s2 from 'src/assets/images/services/2.jpg';
import s3 from 'src/assets/images/services/3.jpg';

export const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const { t } = useTranslation();

  const services = [
    { src: s1, title: t('serviceTitle1'), desc: t('serviceDesc1') },
    { src: s2, title: t('serviceTitle2'), desc: t('serviceDesc2') },
    { src: s3, title: t('serviceTitle3'), desc: t('serviceDesc3') },
  ];

  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: function (_, className) {
      return '<span class="' + className + '"></span>';
    },
  };
  return (
    <section id="services" className="container">
      <h2 className="title">{t('navServices')}</h2>
      <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2" data-aos="fade-right">
        <div className="relative flex items-center">
          <div className="z-10 flex flex-col gap-2 pr-0 md:pr-3">
            <h2 className="text-xl font-bold text-gray-800">{services[activeIndex].title}</h2>
            <p className="text-gray-600">{services[activeIndex].desc}</p>
          </div>
        </div>
        <div className="p-2" data-aos="zoom-in">
          <Swiper
            className="mySwiper"
            effect={'cards'}
            pagination={pagination}
            grabCursor
            rewind
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[EffectCards, Pagination, Autoplay]}
            onActiveIndexChange={(e) => setActiveIndex(e.activeIndex)}
          >
            {services.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  className="object-cover w-64 max-w-full rounded-md h-[300px] filter brightness-60"
                  src={item.src}
                  alt={item.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
