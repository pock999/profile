import React from 'react';

import Container from './components/Container';
import Card from './components/Card';
import Profile from './components/Profile';

import data from '../data';

const App = () => (
  <Container>
    <Card>
      <Profile {...data.profile} />
    </Card>
  </Container>
);

export default App;