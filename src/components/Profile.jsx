import React from 'react';

import styled from 'styled-components';

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

// 照片(imgUrl)
// 名字(name)
// 英文名字(engName)
// mail(email)
// github(github)

export default ({ imgUrl, name, engName, email, github }) => (
  <ComponentStyle>
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
        <span>{ name }</span>
        <span>{ engName }</span>
        <span>{ email }</span>
        <span>{ github }</span>
      </div>
    </div>
  </ComponentStyle>
);
