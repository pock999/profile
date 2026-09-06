import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Mail, BookOpen, Globe, Linkedin } from 'lucide-react';

const Header = (config) => {
  const { t } = useTranslation();
  return (
    <header className="flex flex-col gap-8 border-b-[3px] border-black bg-[#7EE7DC] p-6 text-black sm:p-10 md:flex-row md:items-center md:p-14">
      <img 
        src={config.imgUrl} 
        alt="Profile" 
        className="h-40 w-32 shrink-0 border-[3px] border-black object-cover shadow-[7px_7px_0_#000]"
      />
      <div className="min-w-0 flex-1 text-center md:text-left">
        <h1 className="text-5xl font-black leading-[0.9] tracking-tight sm:text-7xl">{t('profile.name')}</h1>
        <p className="mt-3 font-mono text-lg font-bold">{t('profile.engName')}</p>
        <p className="mt-4 w-full max-w-full break-words text-lg font-bold">{t('profile.title')}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
          <a href={`mailto:${config.info.email}`} className="flex items-center gap-2 border-2 border-black bg-[#D1D5DB] px-3 py-2 font-mono text-xs font-black shadow-[3px_3px_0_#000] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none active:translate-x-[5px] active:translate-y-[5px]">
            <Mail size={18} /> {config.info.email}
          </a>
          <a href={config.info.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 border-2 border-black bg-[#4DA3FF] px-3 py-2 font-mono text-xs font-black shadow-[3px_3px_0_#000] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none active:translate-x-[5px] active:translate-y-[5px]">
            <Linkedin size={18} /> Linkedin
          </a>
          <a href={config.info.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 border-2 border-black bg-[#4B5563] px-3 py-2 font-mono text-xs font-black text-white shadow-[3px_3px_0_#000] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none active:translate-x-[5px] active:translate-y-[5px]">
            <Github size={18} /> GitHub
          </a>
          <a href={config.info.medium} target="_blank" rel="noreferrer" className="flex items-center gap-2 border-2 border-black bg-[#A7D46F] px-3 py-2 font-mono text-xs font-black shadow-[3px_3px_0_#000] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none active:translate-x-[5px] active:translate-y-[5px]">
            <BookOpen size={18} /> Medium
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;