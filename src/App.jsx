import React from 'react';
import config from '../config';
import {LanguageSwitcher, ScrollToTop, Header, About, Experience, Skills, Portfolios, Education, Certificates, Footer} from './components'

const App = () => {

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6">
      <LanguageSwitcher />
      <ScrollToTop />

      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <Header {...config} />

        <main className="p-8 md:p-12 space-y-12">
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