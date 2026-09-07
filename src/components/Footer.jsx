import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ABACUS_API_URL = 'https://abacus.jasoncameron.dev';
const ABACUS_NAMESPACE = 'pock999.github.io';
const ABACUS_COUNTER_KEY = 'profile-visits';
const SESSION_COUNT_KEY = `abacus:${ABACUS_NAMESPACE}:${ABACUS_COUNTER_KEY}`;

const Footer = () => {
  const { t } = useTranslation();
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const updateVisitorCount = async () => {
      const hasCountedThisSession = sessionStorage.getItem(SESSION_COUNT_KEY) === 'true';
      const action = hasCountedThisSession ? 'get' : 'hit';
      const endpoint = `${ABACUS_API_URL}/${action}/${ABACUS_NAMESPACE}/${ABACUS_COUNTER_KEY}`;

      if (!hasCountedThisSession) sessionStorage.setItem(SESSION_COUNT_KEY, 'true');

      try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error(`Abacus request failed: ${response.status}`);

        const data = await response.json();
        if (isMounted) setVisitorCount(data.value);
      } catch (error) {
        if (!hasCountedThisSession) sessionStorage.removeItem(SESSION_COUNT_KEY);
        console.error('Unable to update visitor count with Abacus.', error);
      }
    };

    if(!import.meta.env.DEV) {
      updateVisitorCount();
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <footer className="border-t-[3px] border-black bg-black py-8 text-center font-mono text-sm text-white">
      <p>© {new Date().getFullYear()} {t('profile.name')}</p>
      <p className="mt-1">
        Built with <span className="text-[#7EE7DC]">React</span>, 
        <span className="text-[#FFDE4D]"> Tailwind</span> & 
        <span className="font-black text-[#A371F7]"> Github Copilot</span>
      </p>
      <p className="mt-4 font-black text-[#7EE7DC]">
        {t('footer.visitors')}: {visitorCount ?? '...'}
      </p>
    </footer>
  );
};

export default Footer;