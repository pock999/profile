import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-50 text-center py-8 text-gray-400 text-sm">
      <p>© {new Date().getFullYear()} {t('profile.name')}</p>
      <p className="mt-1">
        Built with <span className="text-blue-500">React</span>, 
        <span className="text-sky-500"> Tailwind</span> & 
        <span className="text-purple-500"> Gemini AI</span>
      </p>
    </footer>
  );
};

export default Footer;