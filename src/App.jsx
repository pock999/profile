import React from 'react';

import Container from './components/Container';
import Card from './components/Card';
import Profile from './components/Profile';

import Skill from './components/Section/Skill';
import About from './components/Section/About';
import Education from './components/Section/Education';
import Experience from './components/Section/Experience';

import data from '../data';

const App = () => (
  <Container>
    <Card>
      <Profile {...data.profile} />

      <Skill
        skills={data.skill}
      />
      <About>
        {data.about}
      </About>
      <Education />
      <Experience />

    </Card>
  </Container>
);

export default App;