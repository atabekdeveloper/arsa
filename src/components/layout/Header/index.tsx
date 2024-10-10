import React, { useState } from 'react';
import Select from 'react-tailwindcss-select';
import { useTranslation } from 'react-i18next';

import logo from 'src/assets/logo.png';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState({ value: 'uz', label: 'UZ' });

  const { t, i18n } = useTranslation();

  const options = [
    { value: 'uz', label: 'UZ' },
    { value: 'en', label: 'EN' },
    { value: 'ru', label: 'RU' },
  ];

  const navItems = [
    { title: t('navAbout'), link: '#about' },
    { title: t('navProducts'), link: '#products' },
    { title: t('navPartners'), link: '#partners' },
    { title: t('navServices'), link: '#services' },
    { title: t('navContact'), link: '#contact' },
  ];

  const handleChange = (value: any) => {
    i18n.changeLanguage(value.label);
    setLang(value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container flex items-center justify-between px-5 py-4 max-w-[1220px] m-auto">
        <a href="#">
          <img className="max-w-12" src={logo} alt="Logo" />
        </a>

        <nav className="hidden space-x-4 md:flex lg:space-x-6">
          {navItems.map((item, i) => (
            <a key={i} href={item.link} className="text-sm lg:text-base hover:text-primary">
              {item.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 lg:gap-4">
          <Select value={lang} onChange={handleChange} options={options} primaryColor="blue" />
          <a
            href="tel:+998901501350"
            className="px-3 py-2 text-white rounded-md bg-primary hover:opacity-90 lg:px-4 lg:py-2"
          >
            +998901501350
          </a>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="ml-4 text-gray-500 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-4 py-2 space-y-4">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="text-sm hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
