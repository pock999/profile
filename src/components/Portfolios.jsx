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
      <p className="mb-2 font-mono text-xs font-black uppercase">04 / SELECTED_WORK</p>
      <h2 className="mb-6 text-3xl font-black uppercase">{t('portfolios.title')}</h2>
      {portfolioContent.map((p, idx) => (
        <div key={idx} className="border-[3px] border-black bg-black p-6 text-white shadow-[7px_7px_0_#7EE7DC]">
          <h3 className="mb-1 text-xl font-black uppercase text-[#7EE7DC]">{p.title}</h3>
          <p className="mb-4 font-mono text-sm text-[#FFDE4D]">{p.period}</p>
          <ul className="space-y-2">
            {p.infoList.map((info, i) => (
              <li key={i} className="flex gap-2 font-medium text-white">
                <span className="font-mono text-[#FFDE4D]">&gt;</span> {info}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Portfolios;