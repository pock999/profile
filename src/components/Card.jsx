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
    margin: ${props => props.ma ? props.ma * 2 : 0}px;
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

  border-radius: 5px 5px 0 0;
  background-color: ${props => props.iconColor ? props.iconColor : 'white'};
  color: ${props => props.iconColor ? 'white' : 'black'};
  padding: 20px 0 20px 0;

  font-size: 4em;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  item-align: center;
  font-size: 20px;
  font-weight: bolder;
  padding: 5px;

  color: ${props => props.iconColor ? props.iconColor : 'black'};
`;

// card image

export default (props) => (
  <ComponentStyle className="Card" {...props}>
    {
      props.icon 
      ?
        <IconContainer iconColor={props.iconColor}>
          <FontAwesomeIcon icon={props.icon} />
        </IconContainer>
      : null
    }
    {
      props.title ? <TitleContainer iconColor={props.iconColor}>{props.title}</TitleContainer> : null
    }
    {props.children}
  </ComponentStyle>
);