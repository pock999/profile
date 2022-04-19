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
  text-indent: 36px;

  border-right: 2px solid #666;
  border-left: 2px solid #666;
  padding-right: 40px;
  padding-left: 40px;

  transition: 0.2s;

  &:hover {
    border-right: 2px solid #000;
    border-left: 2px solid #000;
  }

  @media (max-width: ${578}px) {
    border-right: none;
    border-left: none;

    &:hover {
      border-right: none;
      border-left: none;
    }
  }

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