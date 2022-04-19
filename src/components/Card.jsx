import React from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ComponentStyle = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: ${props => props.pa ? props.pa : 0}px;
  margin: ${props => props.ma ? props.ma : 0}px;

  @media (min-width: ${579}px) {
    width: ${props => (props.col / 12) * 100}%
  }

  @media (max-width: ${578}px) {
    width: 100%;
  }

  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  item-align: center;

  font-size: 4em;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  item-align: center;
  font-size: 18px
  font-weight: bold;
  padding: 5px;
`;

// card image

export default (props) => (
  <ComponentStyle className="Card" {...props}>
    {
      props.icon 
      ?
        <IconContainer>
          <FontAwesomeIcon icon={props.icon} />
        </IconContainer>
      : null
    }
    {
      props.title ? <TitleContainer>{props.title}</TitleContainer> : null
    }
    {props.children}
  </ComponentStyle>
);