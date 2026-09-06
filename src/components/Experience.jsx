import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h2 className="text-2xl font-bold border-b-2 border-blue-600 inline-block mb-6">{t('experiences.title')}</h2>
      <div className="space-y-8">
        {t('experiences.content', { returnObjects: true }).map((exp, idx) => (
          <div key={idx} className="relative pl-6 border-l-2 border-gray-200">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-600 rounded-full"></div>
            <h3 className="text-xl font-bold">{exp.workUnit}</h3>
            <p className="text-blue-600 font-medium">{exp.jobTitle} | {exp.period}</p>
            <p className="text-gray-600 font-medium pl-5 mt-2">{exp.summary}</p>
            <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
              {exp.list.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <div className="flex flex-wrap gap-2 mt-5">
              {exp.technologies.map((item, i) => (
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

export default Experience;