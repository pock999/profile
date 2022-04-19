import React from 'react';

import styled from 'styled-components';

const ComponentStyle = styled.div`
  margin: auto;
  max-width: 960px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export default (props) => (
  <ComponentStyle className="Container">
    {props.children}
  </ComponentStyle>
);