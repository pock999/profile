import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import config from '../../config';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const btnClass = (lng) => `
    border-2 border-black px-3 py-1 font-mono text-xs font-black uppercase transition-all duration-150
    ${i18n.language === lng 
      ? 'bg-[#7EE7DC] text-black shadow-[3px_3px_0_#000]' 
      : 'bg-white text-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none'}
  `;

  return (
    <div className="fixed right-4 top-4 z-50 flex items-center gap-2 border-[3px] border-black bg-[#FFDE4D] p-2 shadow-[5px_5px_0_#000] sm:right-8 sm:top-8">
      <div className="border-r-2 border-black pr-2 text-black">
        <Globe size={16} />
      </div>
      <div className="flex gap-1">
        {
          config.lang.map(x => (
            <button 
              key={x.key}
              onClick={() => changeLanguage(x.key)} 
              className={btnClass(x.key)}
            >
              {x.text}
            </button>
          ))
        }
      </div>
    </div>
  );
};

export default LanguageSwitcher;