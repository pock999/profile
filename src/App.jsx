import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Mail, BookOpen, Globe } from 'lucide-react';
import config from '../config';
import {LanguageSwitcher, ScrollToTop} from './components'

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6">
      <LanguageSwitcher />
      <ScrollToTop />

      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        
        {/* Header Section */}
        <header className="bg-slate-800 text-white p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <img 
            src={config.imgUrl} 
            alt="Profile" 
            className="w-32 h-40 object-cover border-4 border-slate-600 rounded-lg shadow-lg"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold">{t('profile.name')}</h1>
            <p className="text-xl text-slate-300 mt-1">{t('profile.engName')}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
              <a href={`mailto:${config.info.email}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail size={18} /> {config.info.email}
              </a>
              <a href={config.info.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Github size={18} /> GitHub
              </a>
              <a href={config.info.medium} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <BookOpen size={18} /> Medium
              </a>
            </div>
          </div>
        </header>

        <main className="p-8 md:p-12 space-y-12">
          
          {/* About */}
          <section>
            <h2 className="text-2xl font-bold border-b-2 border-blue-600 inline-block mb-4">About Me</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t('about')}
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold border-b-2 border-blue-600 inline-block mb-6">Experience</h2>
            <div className="space-y-8">
              {t('experiences', { returnObjects: true }).map((exp, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-gray-200">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <h3 className="text-xl font-bold">{exp.workUnit}</h3>
                  <p className="text-blue-600 font-medium">{exp.jobTitle} | {exp.period}</p>
                  <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
                    {exp.list.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold border-b-2 border-blue-600 inline-block mb-6">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t('skills', { returnObjects: true }).map((skill, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-slate-800 mb-3 border-b border-gray-200 pb-2">{skill.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span key={i} className="px-2 py-1 bg-white border border-gray-200 text-sm text-gray-600 rounded shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Portfolios */}
          <section>
            <h2 className="text-2xl font-bold border-b-2 border-blue-600 inline-block mb-6">Education & Honors</h2>
            {t('portfolios', { returnObjects: true }).map((p, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="text-xl font-bold mb-1">{p.title}</h3>
                <p className="text-gray-500 mb-4">{p.period}</p>
                <ul className="space-y-2">
                  {p.infoList.map((info, i) => (
                    <li key={i} className="flex gap-2 text-gray-700">
                      <span className="text-blue-600">🏆</span> {info}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

        </main>

        <footer className="bg-gray-50 text-center py-8 text-gray-400 text-sm">
          © {new Date().getFullYear()} {t('profile.name')} - Built with React & Tailwind
        </footer>
      </div>
    </div>
  );
};

export default App;