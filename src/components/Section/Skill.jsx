import React from 'react';

import styled from 'styled-components';

import Section from "./index";

import Card from '../Card';

import { faNodeJs, faJs } from '@fortawesome/free-brands-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

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
          <Card
            col={3}
            key={sk.title}
            title={sk.title}
            ma={5}
            icon={
              sk.icon === 'js' ? faJs
              : sk.icon === 'nodejs' ? faNodeJs
              : sk.icon === 'ellipsis' ? faEllipsis
              : null
            }
          >
            {sk.items.map(item => (<>{item}<br/></>))}
          </Card>
        )
      }
    </RowStyle>
  </Section>
);