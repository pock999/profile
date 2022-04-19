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
            iconColor={sk.iconColor}
            icon={
              sk.icon === 'js' ? faJs
              : sk.icon === 'nodejs' ? faNodeJs
              : sk.icon === 'ellipsis' ? faEllipsis
              : null
            }
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              {sk.items.map(item => (<div key={item} style={{marginTop: 5}}>{item}</div>))}
            </div>
            
          </Card>
        )
      }
    </RowStyle>
  </Section>
);