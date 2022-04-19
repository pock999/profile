import React from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  border: none;
  borderRadius: 50%;
  width: 60px;
  height: 60px;
  background-color: #8275c9;
  color: white;
  position: fixed;
  right: 40px;
  bottom: 40px;
  zIndex: 20;
  cursor: pointer;
  font-size: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 50%;
`;

export default props => (
  <Button
    onClick={props.onClick}
  >
    <FontAwesomeIcon
      icon={faArrowUp}
    />
  </Button>
);