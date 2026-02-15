import React from 'react';
import { useTranslation } from 'react-i18next';

import data from '../data';

const App = () => {
  const { t } = useTranslation();
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };


  return (
    <div style={{marginTop: 200}}>
      {t('profile.name')}
    </div>
  );
};

export default App;