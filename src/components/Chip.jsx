import React from 'react';

import styled from 'styled-components';

const ComponentStyle = styled.div`
  padding: 5px 10px 5px 10px;
  margin: 2px;
  border-radius: 17px;

  color: white;
  background-color: #689C63;

  font-size: 12px;
  font-weight: bold;

`;

export default (props) => (
  <ComponentStyle {...props}>
    {props.children}
  </ComponentStyle>
);