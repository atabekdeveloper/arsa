import React, { useState } from 'react';
import Select from 'react-tailwindcss-select';
import { useTranslation } from 'react-i18next';

import logo from 'src/assets/logo.png';
import phone from 'src/assets/contact/telephone.png';

const options = [
  { value: 'uz', label: 'UZ' },
  { value: 'en', label: 'EN' },
  { value: 'ru', label: 'RU' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const langStorage = localStorage.getItem('lang');
  const [lang, setLang] = useState<any>(
    langStorage ? options.find((option) => option.label === langStorage) : options[0],
  );

  const { t, i18n } = useTranslation();

  const navItems = [
    { title: t('navAbout'), link: '#about' },
    { title: t('navProducts'), link: '#products' },
    { title: t('navPartners'), link: '#partners' },
    { title: t('navServices'), link: '#services' },
    { title: t('navContact'), link: '#contact' },
  ];

  const handleChange = (value: any) => {
    i18n.changeLanguage(value.label);
    localStorage.setItem('lang', value.label);
    setLang(value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 bg-white shadow-md">
      <div className="container flex items-center justify-between px-5 py-4 max-w-[1220px] m-auto">
        <a href="#">
          <img
            className="transition-transform duration-500 max-w-12 hover:scale-105"
            src={logo}
            alt="Logo"
          />
        </a>

        <nav className="hidden space-x-4 md:flex lg:space-x-6">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="text-sm transition-colors duration-300 lg:text-base hover:text-primary"
            >
              {item.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 lg:gap-4">
          <Select value={lang} onChange={handleChange} options={options} primaryColor="blue" />
          <a
            href="tel:+998901501350"
            className="p-2 text-white transition-all duration-300 rounded-full bg-primary hover:opacity-90"
          >
            <img className="max-w-6" src={phone} alt="Phone" />
          </a>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="ml-4 text-gray-500 focus:outline-none">
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-90' : 'rotate-0'
                }`}
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
        className={`md:hidden overflow-hidden transition-max-height duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-4 py-2 space-y-4 bg-white shadow-md">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="text-sm transition-colors duration-300 hover:text-primary"
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
