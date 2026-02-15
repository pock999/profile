import React from 'react';
import { useTranslation } from 'react-i18next';

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
        <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-sky-400">
          Tailwind 啟動成功！
          {t('profile.name')}
        </h1>
      </div>
    </div>
  );
};

export default App;