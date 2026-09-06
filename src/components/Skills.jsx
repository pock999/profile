import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h2 className="mb-6 text-3xl font-black uppercase">{t('skills.title')}</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {t('skills.content', { returnObjects: true }).map((skill, idx) => (
          <div key={idx} className="border-[3px] border-black bg-[#7EE7DC] p-4 shadow-[5px_5px_0_#000]">
            <h3 className="mb-3 border-b-2 border-black pb-2 font-black uppercase">{skill.title}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <span key={i} className="border-2 border-black bg-white px-2 py-1 font-mono text-xs font-bold">
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