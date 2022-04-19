import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
    <VerticalTimeline
      layout="2-columns"
      lineColor="#efefef"
    >
      {props.educations.map(edu => (
        <VerticalTimelineElement
          contentStyle={{ background: 'rgb(245, 245, 245)', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(245, 245, 245)' }}
          date={edu.period}
          iconStyle={{ background: '#2396F3', color: 'white' }}
          key={edu.period}
        >
          <h2 className="vertical-timeline-element-title" style={{ marginBottom: '10px'}}>{edu.school}</h2>
          <h4 className="vertical-timeline-element-subtitle">{edu.major}</h4>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </Section>
);