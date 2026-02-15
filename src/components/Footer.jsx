import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-50 text-center py-8 text-gray-400 text-sm">
      © {new Date().getFullYear()} {t('profile.name')} - Built with React & Tailwind
    </footer>
  );
};

export default Footer;