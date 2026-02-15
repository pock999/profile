import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h2 className="text-2xl font-bold border-b-2 border-blue-600 inline-block mb-6">{t('skills.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {t('skills.content', { returnObjects: true }).map((skill, idx) => (
          <div key={idx} className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-3 border-b border-gray-200 pb-2">{skill.title}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <span key={i} className="px-2 py-1 bg-white border border-gray-200 text-sm text-gray-600 rounded shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;