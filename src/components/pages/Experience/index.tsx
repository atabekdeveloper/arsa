import React from 'react';
import { CountUp } from 'use-count-up';
import { FaBoxes, FaUsers } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { HiOutlineCalendar } from 'react-icons/hi';

export const Experience: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const { t } = useTranslation();
  return (
    <div className="pt-16" ref={ref}>
      <div className="grid max-w-full grid-cols-1 gap-12 mx-auto text-center md:grid-cols-3">
        <div className="p-8 transition-transform duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105">
          <div className="flex justify-center mb-4 text-6xl text-primary">
            <HiOutlineCalendar />
          </div>
          <h2 className="text-5xl font-bold text-gray-800">
            <CountUp isCounting={inView} start={1} end={8} duration={2} />+
          </h2>
          <p className="mt-2 text-xl text-gray-600">{t('experience')}</p>
        </div>
        <div className="p-8 transition-transform duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105">
          <div className="flex justify-center mb-4 text-6xl text-primary">
            <FaBoxes />
          </div>
          <h2 className="text-5xl font-bold text-gray-800">
            <CountUp isCounting={inView} start={10} end={120} />+
          </h2>
          <p className="mt-2 text-xl text-gray-600">{t('assortments')}</p>
        </div>
        <div className="p-8 transition-transform duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105">
          <div className="flex justify-center mb-4 text-6xl text-primary">
            <FaUsers />
          </div>
          <h2 className="text-5xl font-bold text-gray-800">
            <CountUp isCounting={inView} start={9} end={30} />+
          </h2>
          <p className="mt-2 text-xl text-gray-600">{t('customers')}</p>
        </div>
      </div>
    </div>
  );
};
