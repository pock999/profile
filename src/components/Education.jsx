import React from 'react';
import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h2 className="text-2xl font-bold border-b-2 border-blue-600 inline-block mb-6">{t('education.title')}</h2>
      {t('education.content', { returnObjects: true }).map((edu, idx) => (
        <div key={idx} className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-800">{edu.school}</h3>
            <p className="text-blue-600 font-medium">{edu.major} | {edu.period}</p>
          </div>

          {/* 產學合作 */}
          {edu.industryCooperation && edu.industryCooperation.map((coop, i) => (
            <div key={i} className="ml-4 p-4 bg-slate-50 rounded-lg border-l-4 border-slate-300">
              <h4 className="font-bold text-slate-700">產學合作：{coop.workUnit}</h4>
              <p className="text-sm text-slate-500">{coop.jobTitle} ({coop.period})</p>
              <ul className="list-disc ml-5 mt-2 text-gray-600 text-sm space-y-1">
                {coop.list.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </div>
          ))}

          {/* 畢業專題 */}
          {edu.seniorProject && edu.seniorProject.map((project, i) => (
            <div key={i} className="ml-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-300">
              <h4 className="font-bold text-blue-800 underline decoration-blue-200">{project.name}</h4>
              <ul className="list-disc ml-5 mt-2 text-gray-600 text-sm space-y-1">
                {project.list.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Education;