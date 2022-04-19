import React from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMediumM, faGithub } from '@fortawesome/free-brands-svg-icons';

const ComponentStyle = styled.div`
  background: linear-gradient(100deg, #6fa8dc 50%, #3d85c6 50%);
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 20px;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;

  @media (max-width: ${578}px) {
    background: linear-gradient(175deg, #6fa8dc 50%, #3d85c6 50%);
  }
`;

const NameStyle = styled.span`
  color: white;
  font-size: 20px;
  padding-top: 5px;
`;

const LinkStyle = styled.a`
  color: white;
  text-decoration:none;
  padding-top: 5px;
  font-size: 18px;
  transition-duration: 0.5s;

  &:hover {
    color: #ededed;
  }
`;

// 照片(imgUrl)
// 名字(name)
// 英文名字(engName)
// mail(email)
// github(github)

export default ({ imgUrl, name, engName, email, github, medium }) => (
  <ComponentStyle className="profile">
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img
        src={imgUrl}
        style={{
          maxWidth: '150px',
          maxHeight: '150px',
          borderRadius: '50%',
          verticalAlign: 'middle',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <NameStyle>
          { name }{' '}{engName }
        </NameStyle>

        <LinkStyle href={`mailto:${email}`}>
          <FontAwesomeIcon icon={faEnvelope} />{ email }
        </LinkStyle>

        <LinkStyle href={github.url} target="_blank">
          <FontAwesomeIcon icon={faGithub} />
          { github.account }
        </LinkStyle>

        <LinkStyle href={medium.url}>
          <FontAwesomeIcon icon={faMediumM} />
          { medium.account }
        </LinkStyle>
        
      </div>
    </div>
  </ComponentStyle>
);
