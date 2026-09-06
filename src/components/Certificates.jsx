import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar } from 'lucide-react';

const Certificates = () => {
  const { t } = useTranslation();
  return (
    <section className="mt-12">
      <div className="mb-6 border-b-[3px] border-black pb-1">
        <h2 className="text-3xl font-black uppercase text-slate-800">
          {t('certificate.title')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {t('certificate.content', { returnObjects: true }).map((cert, idx) => (
          <div 
            key={idx} 
            className="group flex flex-col justify-center border-[3px] border-black bg-[#F4F4F0] p-4 transition-all duration-150 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0_#000]"
          >
            <h3 className="font-black text-slate-700 group-hover:text-[#087F78]">
              {cert.name}
            </h3>
            <div className="mt-2 flex items-center gap-2 font-mono text-sm text-slate-500">
              <Calendar size={14} />
              <span>{cert.issueDate}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;