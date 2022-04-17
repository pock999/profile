import React from 'react';

import Section from "./index";

export default (props) => (
  <Section
    title='關於我'
  >
    {props.children}
  </Section>
);