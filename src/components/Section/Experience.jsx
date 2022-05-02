import React from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Section from "./index";
import Chip from '../Chip';

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
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginBottom: 5,
            }}
          >
            {
              exp.useTechs.map(tech => (
                <Chip key={tech}>
                  {tech}
                </Chip>
              ))
            }
          </div>
          <h2 className="vertical-timeline-element-title" style={{ marginBottom: '10px'}}>
            {exp.workUnit}
            {exp.department && <>({exp.department})</>}
          </h2>
          <h3 className="vertical-timeline-element-subtitle">{exp.jobTitle}</h3>
          <br />
          <p>
            {exp.list.map(item => (<span key={item}>{item} <br /></span>))}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </Section>
);