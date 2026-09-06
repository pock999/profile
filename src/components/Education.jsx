import React from 'react';
import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h2 className="mb-6 text-3xl font-black uppercase">{t('education.title')}</h2>
      {t('education.content', { returnObjects: true }).map((edu, idx) => (
        <div key={idx} className="space-y-6">
          <div className="group border-[3px] border-black bg-[#F4F4F0] p-5 shadow-[5px_5px_0_#000] transition-all duration-150 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0_#000]">
            <h3 className="text-xl font-black uppercase text-slate-800">{edu.school}</h3>
            <p className="font-mono text-sm font-bold text-[#087F78]">{edu.major} | {edu.period}</p>
          </div>

          {/* 產學合作 */}
          {edu.industryCooperation && edu.industryCooperation.map((coop, i) => (
            <div key={i} className="ml-4 border-[3px] border-black bg-[#FFDE4D] p-4 shadow-[5px_5px_0_#000] transition-all duration-150 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0_#000]">
              <h4 className="font-black text-slate-700">產學合作：{coop.workUnit}</h4>
              <p className="font-mono text-sm text-slate-700">{coop.jobTitle} ({coop.period})</p>
              <ul className="ml-5 mt-2 list-disc space-y-1 text-sm text-slate-700">
                {coop.list.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </div>
          ))}

          {/* 畢業專題 */}
          {edu.seniorProject && edu.seniorProject.map((project, i) => (
            <div key={i} className="ml-4 border-[3px] border-black bg-[#7EE7DC] p-4 shadow-[5px_5px_0_#000] transition-all duration-150 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0_#000]">
              <h4 className="font-black text-slate-800 underline decoration-2">{project.name}</h4>
              <ul className="ml-5 mt-2 list-disc space-y-1 text-sm text-slate-700">
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