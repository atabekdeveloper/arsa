import React from 'react';
import { CountUp } from 'use-count-up';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { AiOutlineProduct } from 'react-icons/ai';
import { IoPeopleOutline } from 'react-icons/io5';

export const Experience: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const { t } = useTranslation();
  return (
    <section className="container" ref={ref}>
      <div className="grid max-w-full grid-cols-1 gap-12 mx-auto text-center md:grid-cols-3">
        <div className="p-8 transition-transform duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105">
          <div className="flex justify-center mb-4 text-6xl text-primary">
            <IoCalendarClearOutline />
          </div>
          <h2 className="text-5xl font-bold text-gray-800">
            <CountUp isCounting={inView} start={1} end={8} duration={2} />+
          </h2>
          <p className="mt-2 text-xl text-gray-600">{t('experience')}</p>
        </div>
        <div className="p-8 transition-transform duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105">
          <div className="flex justify-center mb-4 text-6xl text-primary">
            <AiOutlineProduct />
          </div>
          <h2 className="text-5xl font-bold text-gray-800">
            <CountUp isCounting={inView} start={10} end={120} />+
          </h2>
          <p className="mt-2 text-xl text-gray-600">{t('assortments')}</p>
        </div>
        <div className="p-8 transition-transform duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105">
          <div className="flex justify-center mb-4 text-6xl text-primary">
            <IoPeopleOutline />
          </div>
          <h2 className="text-5xl font-bold text-gray-800">
            <CountUp isCounting={inView} start={9} end={100} />+
          </h2>
          <p className="mt-2 text-xl text-gray-600">{t('customers')}</p>
        </div>
      </div>
    </section>
  );
};
