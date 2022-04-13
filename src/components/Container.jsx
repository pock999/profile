import React from 'react';

import styled from 'styled-components';

const ComponentStyle = styled.div`
  margin: auto;
  max-width: 960px;
  padding-top: 50px;
`;

export default (props) => (
  <ComponentStyle>
    {props.children}
  </ComponentStyle>
);