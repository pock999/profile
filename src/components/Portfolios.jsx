import React from 'react';
import { useTranslation } from 'react-i18next';

const Portfolios = () => {
  const { t } = useTranslation();

  const portfolioContent = t('portfolios.content', { returnObjects: true }) || [];

  if (portfolioContent.length === 0) {
    return <></>;
  }

  return (
    <section>
      <h2 className="text-2xl font-bold border-b-2 border-blue-600 inline-block mb-6">{t('portfolios.title')}</h2>
      {portfolioContent.map((p, idx) => (
        <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
          <h3 className="text-xl font-bold mb-1">{p.title}</h3>
          <p className="text-gray-500 mb-4">{p.period}</p>
          <ul className="space-y-2">
            {p.infoList.map((info, i) => (
              <li key={i} className="flex gap-2 text-gray-700">
                <span className="text-blue-600"></span> {info}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Portfolios;