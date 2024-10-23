import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { GrLanguage } from 'react-icons/gr';
import { TbMenuDeep, TbX } from 'react-icons/tb'; // Добавляем иконку для закрытия меню

import logo from 'src/assets/images/logo_white.png';

const options = [
  { value: 'uz', label: 'UZ' },
  { value: 'en', label: 'EN' },
  { value: 'ru', label: 'RU' },
];

export const Header: React.FC = () => {
  const langStorage = localStorage.getItem('lang');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [lang, setLang] = useState<any>(
    langStorage ? options.find((option) => option.label === langStorage) : options[0],
  );

  const { t, i18n } = useTranslation();

  const navItems = [
    { title: t('navAbout'), link: '#about' },
    { title: t('advantages'), link: '#advantages' },
    { title: t('navServices'), link: '#services' },
    { title: t('navProducts'), link: '#products' },
    { title: t('navPartners'), link: '#partners' },
    { title: t('navContact'), link: '#contact' },
  ];

  const handleChange = (value: any) => {
    i18n.changeLanguage(value.label);
    localStorage.setItem('lang', value.label);
    setLang(value);
    setIsDropdownOpen(false); // Закрыть dropdown после выбора языка
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      !buttonRef.current?.contains(event.target as Node)
    )
      setIsDropdownOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-700 ${
        scrolled ? 'bg-gray-800' : 'bg-white/10 backdrop-blur-lg shadow-lg'
      }`}
    >
      <div
        className={`container flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-8'
        }`}
      >
        <a href="#">
          <img
            className="transition-transform duration-500 max-w-14 hover:scale-105"
            src={logo}
            alt="Logo"
          />
        </a>

        <nav className="hidden space-x-4 md:flex lg:space-x-6">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="px-2 py-1 text-sm font-medium text-white transition-colors duration-300 rounded-sm hover:bg-[#F2F2F2] hover:text-black"
            >
              {item.title}
            </a>
          ))}
        </nav>

        <div className="relative flex items-center gap-2 lg:gap-4">
          {/* Кнопка и выпадающий список выбора языка */}
          <button
            ref={buttonRef}
            className="flex items-center gap-2 text-white cursor-pointer"
            onClick={toggleDropdown}
          >
            <GrLanguage size={24} />
            <span className="text-white">{lang.label}</span>
          </button>

          {/* Выпадающий список */}
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 w-24 py-2 mt-2 transition-all duration-300 bg-white rounded shadow-lg top-7"
            >
              {options.map((option) => (
                <div
                  key={option.value}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${
                    lang.value === option.value ? 'font-bold' : ''
                  }`}
                  onClick={() => handleChange(option)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}

          <div className="md:hidden">
            <button onClick={toggleMenu} className="ml-4 text-white">
              <TbMenuDeep size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Полноэкранное мобильное меню */}
      <div
        className={`fixed inset-0 w-full min-h-screen bg-black bg-opacity-90 z-40 flex items-center justify-center transition-opacity duration-700 ease-in-out top-0 right-0 bottom-0 left-0 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center space-y-6 text-2xl text-white">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="transition-colors duration-300 hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </nav>

        <button
          onClick={toggleMenu}
          className="absolute text-white top-4 right-4 focus:outline-none"
        >
          <TbX size={32} /> {/* Кнопка для закрытия меню */}
        </button>
      </div>
    </header>
  );
};
