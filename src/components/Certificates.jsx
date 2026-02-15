import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar } from 'lucide-react';

const Certificates = () => {
  const { t } = useTranslation();
  return (
    <section className="mt-12">
      <div className="flex items-center gap-2 mb-6 border-b-2 border-blue-600 inline-flex pb-1">
        <h2 className="text-2xl font-bold text-slate-800">
          {t('certificate.title')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {t('certificate.content', { returnObjects: true }).map((cert, idx) => (
          <div 
            key={idx} 
            className="group p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col justify-center"
          >
            <h3 className="font-bold text-slate-700 group-hover:text-blue-700 transition-colors">
              {cert.name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-slate-500 mt-2">
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