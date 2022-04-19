import React from 'react';

import styled from 'styled-components';

import Section from "./index";

import Card from '../Card';

const RowStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default (props) => (
  <Section
    title='技能'
  >
    <RowStyle>
      {
        props.skills.map(sk => 
          <Card col={3} key={sk.title} title={sk.title} ma={5}>
            {sk.items.map(item => (<>{item}<br/></>))}
          </Card>
        )
      }
    </RowStyle>
  </Section>
);