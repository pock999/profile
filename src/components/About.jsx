import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section className="border-l-[10px] border-[#7EE7DC] pl-5">
      <h2 className="mb-4 text-3xl font-black uppercase">{t('about.title')}</h2>
      <p className="text-lg font-medium leading-relaxed text-slate-700">
        {t('about.content')}
      </p>
    </section>
  );
};

export default About;