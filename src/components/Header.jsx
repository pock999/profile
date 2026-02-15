import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Mail, BookOpen, Globe } from 'lucide-react';

const Header = (config) => {
  const { t } = useTranslation();
  return (
    <header className="bg-slate-800 text-white p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
      <img 
        src={config.imgUrl} 
        alt="Profile" 
        className="w-32 h-40 object-cover border-4 border-slate-600 rounded-lg shadow-lg"
      />
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold">{t('profile.name')}</h1>
        <p className="text-xl text-slate-300 mt-1">{t('profile.engName')}</p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
          <a href={`mailto:${config.info.email}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Mail size={18} /> {config.info.email}
          </a>
          <a href={config.info.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Github size={18} /> GitHub
          </a>
          <a href={config.info.medium} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <BookOpen size={18} /> Medium
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;