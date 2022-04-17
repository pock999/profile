import React from 'react';

import styled from 'styled-components';

import Section from "./index";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemContainer = styled.div`
  padding: 20px 5px 20px 5px;
  font-size: 18px;

  display: flex;
  flex-direction: row;

  justify-content: space-between;

  @media (max-width: ${578}px) {
    flex-direction: column;
  }
`;

export default (props) => (
  <Section
    title='學歷'
  >
    <ListContainer>
      {props.educations.map(edu => (
        <ItemContainer key={edu.period}>
          <div>{edu.school} - {edu.major}</div>
          <div style={{ color: '#666', fontSize: '14px', lineHeight: '18px'}}>{edu.period}</div>
        </ItemContainer>
      ))}
    </ListContainer>
  </Section>
);