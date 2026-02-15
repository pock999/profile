import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h2 className="text-2xl font-bold border-b-2 border-blue-600 inline-block mb-4">{t('about.title')}</h2>
      <p className="text-gray-700 leading-relaxed text-lg">
        {t('about.content')}
      </p>
    </section>
  );
};

export default About;