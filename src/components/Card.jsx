import React from 'react';

import styled from 'styled-components';

const ComponentStyle = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 10px;
`;

export default (props) => (
  <ComponentStyle className="Card">
    {props.children}
  </ComponentStyle>
);