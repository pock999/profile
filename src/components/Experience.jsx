import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const Experience = () => {
  const { t } = useTranslation();
  const experiences = t('experiences.content', { returnObjects: true });
  const [openItems, setOpenItems] = useState(() => new Set([0]));

  const toggleItem = (idx) => {
    setOpenItems((currentItems) => {
      const nextItems = new Set(currentItems);

      if (nextItems.has(idx)) {
        nextItems.delete(idx);
      } else {
        nextItems.add(idx);
      }

      return nextItems;
    });
  };

  return (
    <section>
      <h2 className="mb-6 text-3xl font-black uppercase">{t('experiences.title')}</h2>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative border-[3px] border-black bg-[#F4F4F0] p-5 shadow-[6px_6px_0_#000] transition-all duration-150 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0_#000]">
            <div className="absolute -left-[11px] top-5 h-4 w-4 border-2 border-black bg-[#FFDE4D]"></div>
            <button
              type="button"
              onClick={() => toggleItem(idx)}
              aria-expanded={openItems.has(idx)}
              className="flex w-full items-start justify-between gap-4 text-left"
            >
              <h3 className="text-xl font-black uppercase">{exp.workUnit}</h3>
              <ChevronDown
                size={24}
                className={`shrink-0 border-2 border-black bg-[#FFDE4D] transition-transform duration-150 ${openItems.has(idx) ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            <p className="mt-1 font-mono text-sm font-bold text-[#087F78]">{exp.jobTitle} | {exp.period}</p>
            <p className="mt-3 font-medium text-slate-700">{exp.summary}</p>
            {openItems.has(idx) && (
              <ul className="ml-5 mt-3 list-disc space-y-1 text-slate-700">
                {exp.list.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}
            <div className="flex flex-wrap gap-2 mt-5">
              {exp.technologies.map((item, i) => (
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

export default Experience;