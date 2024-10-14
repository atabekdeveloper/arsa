import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

// import tshirt from 'src/assets/services/tshirt.png';
// import merchant from 'src/assets/services/merchant.png';
// import delivery from 'src/assets/services/delivery.png';

import s1 from 'src/assets/services/1.jpg';
import s2 from 'src/assets/services/2.jpg';
import s3 from 'src/assets/services/3.jpg';

import { useTranslation } from 'react-i18next';

export const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const { t } = useTranslation();

  const services = [
    { src: s1, title: t('serviceTitle1'), desc: t('serviceDesc1') },
    { src: s2, title: t('serviceTitle2'), desc: t('serviceDesc2') },
    { src: s3, title: t('serviceTitle3'), desc: t('serviceDesc3') },
  ];
  return (
    <div id="services">
      <h2 className="title">{t('navServices')}</h2>
      <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
        <div className="relative flex items-center overflow">
          {/* <div className="absolute top-0 left-0 md:w-[300px] md:h-[300px] w-[200px] h-[200px]  bg-blue-500 rounded-full opacity-40"></div> */}

          {/* <div className="absolute bottom-0 right-0 md:w-[300px] md:h-[300px] w-[200px] h-[200px] bg-red-500 rounded-full opacity-40"></div> */}

          <div className="z-10 flex flex-col gap-2 pr-0 md:pr-3">
            <h2 className="text-xl font-bold text-gray-800">{services[activeIndex].title}</h2>
            <p className="text-gray-600">{services[activeIndex].desc}</p>
          </div>
        </div>
        <div className="">
          <Swiper
            className="mySwiper"
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            onActiveIndexChange={(e) => setActiveIndex(e.activeIndex)}
          >
            {services.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  className="max-w-full md:h-[500px] h-64 object-cover filter brightness-60 rounded-md"
                  src={item.src}
                  alt={item.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center gap-4" data-aos="fade-right">
            <img className="max-w-36" src={delivery} alt="Delivery" />
            <div>
              <h3 className="text-lg font-bold text-gray-700">{t('serviceTitle1')}</h3>
              <p>{t('serviceDesc1')}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4" data-aos="fade-up">
            <img className="max-w-36" src={merchant} alt="Merchant" />
            <div>
              <h3 className="text-lg font-bold text-gray-700">{t('serviceTitle2')}</h3>
              <p>{t('serviceDesc2')}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4" data-aos="fade-left">
            <img className="max-w-36" src={tshirt} alt="Tshirt" />
            <div>
              <h3 className="text-lg font-bold text-gray-700">{t('serviceTitle3')}</h3>
              <p>{t('serviceDesc3')}</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
