import React from 'react';

import Container from './components/Container';
import Card from './components/Card';
import Profile from './components/Profile';

import Skill from './components/Section/Skill';
import About from './components/Section/About';
import Education from './components/Section/Education';
import Experience from './components/Section/Experience';

import GoTopButton from './components/GoTopButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import data from '../data';

const App = () => {
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
    <Container>
      <Card col={12} pa={10}>
        <Profile {...data.profile} />

        <Skill
          skills={data.skills}
        />
        <About>
          {data.about}
        </About>
        <Education
          educations={data.educations}
        />
        <Experience
          experiences={data.experiences}
        />

      </Card>
      {showButton && <GoTopButton
        onClick={() => {
          scrollToTop();
        }}
      />}
    </Container>
  );
};

export default App;