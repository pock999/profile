import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="border-t-[3px] border-black bg-black py-8 text-center font-mono text-sm text-white">
      <p>© {new Date().getFullYear()} {t('profile.name')}</p>
      <p className="mt-1">
        Built with <span className="text-[#7EE7DC]">React</span>, 
        <span className="text-[#FFDE4D]"> Tailwind</span> & 
        <span className="font-black text-[#A371F7]"> Github Copilot</span>
      </p>
    </footer>
  );
};

export default Footer;