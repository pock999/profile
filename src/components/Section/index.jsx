import React from 'react';

import styled from 'styled-components';

const TitleStyle = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
const ComponentStyle = styled.div`
  margin: 20px;
`;

export default (props) => (
  <ComponentStyle className="Card">
    <TitleStyle>{props.title}</TitleStyle>
    <hr />
    {props.children}
  </ComponentStyle>
);