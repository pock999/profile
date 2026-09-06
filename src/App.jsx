import React from 'react';
import config from '../config';
import {LanguageSwitcher, ScrollToTop, Header, About, Experience, Skills, Portfolios, Education, Certificates, Footer} from './components'

const App = () => {

  return (
    <div className="min-h-screen bg-[#F4F4F0] px-4 py-6 font-sans text-black sm:px-8 sm:py-10 lg:px-12">
      <LanguageSwitcher />
      <ScrollToTop />

      <div className="mx-auto max-w-6xl overflow-hidden border-[3px] border-black bg-white shadow-[10px_10px_0_#000]">
        <Header {...config} />

        <main className="space-y-14 p-6 sm:p-10 lg:p-14">
          <About />
          <Experience />
          <Skills />
          <Portfolios />
          <Education />
          <Certificates />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;