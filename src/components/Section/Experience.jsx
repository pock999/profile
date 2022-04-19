import React from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Section from "./index";

export default (props) => (
  <Section
    title='工作經驗'
  >
    <VerticalTimeline
      layout="2-columns"
      lineColor="#efefef"
    >
      {props.experiences.map(exp => (
        <VerticalTimelineElement
          contentStyle={{ background: 'rgb(245, 245, 245)', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(245, 245, 245)' }}
          date={exp.period}
          iconStyle={{ background: '#f3ae23', color: 'white' }}
          key={exp.period}
        >
          <h2 className="vertical-timeline-element-title" style={{ marginBottom: '10px'}}>{exp.workUnit}({exp.department})</h2>
          <h3 className="vertical-timeline-element-subtitle">{exp.jobTitle}</h3>
          <br />
          <h4 className="vertical-timeline-element-subtitle">使用技術: {exp.useTech}</h4>
          <p>
            {exp.list.map(item => (<span key={item}>{item} <br /></span>))}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </Section>
);