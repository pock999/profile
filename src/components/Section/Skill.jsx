import React from 'react';

import styled from 'styled-components';

import Section from "./index";

const ChipStyle = styled.div`
  border-radius: 16px;
  font-size: 14px;
  padding: 5px 15px 5px 15px;
  margin: 5px;

  background-color: #1769aa;
  color: white;
`;

export default (props) => (
  <Section
    title='技能'
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
      }}
    >
    {
      props.skills.map(sk => <ChipStyle>{sk}</ChipStyle>)
    }
    </div>
  </Section>
);