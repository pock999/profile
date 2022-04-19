import React from 'react';

import styled from 'styled-components';

import Section from "./index";

const Paragraph = styled.p`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  line-height: 27px;
  font-size: 18px;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
`;

export default (props) => (
  <Section
    title='關於我'
  >
    <Paragraph>
      {props.children}
    </Paragraph>
  </Section>
);