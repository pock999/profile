import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import config from '../../config';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // 定義按鈕樣式，保持代碼整潔
  const btnClass = (lng) => `
    px-3 py-1 text-sm font-medium rounded-full transition-all duration-200
    ${i18n.language === lng 
      ? 'bg-blue-600 text-white shadow-sm' 
      : 'text-gray-600 hover:bg-gray-200'}
  `;

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-lg border border-gray-100">
      <div className="pl-2 text-gray-400">
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