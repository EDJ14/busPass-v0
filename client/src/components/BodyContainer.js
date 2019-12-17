import React, { Component } from 'react';
import styled from 'styled-components';

import busText from '../img/BigBlueBus.jpg';
import TT from '../img/TransitToken.jpg';
import RandPic from '../img/image0.jpg';
import TimeBox from './Time';

const BigBlueBus = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  background-color: white;

  display: flex;
  flex-direction: column;
`;

const CircleTT = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  background-color: rgb(44, 156, 212);

  display: flex;
  flex-direction: column;
`;

const PictureWordContainer = styled.div`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  background-color: ${props => props.color};

  clip-path: polygon(
    50% 11%,
    75% 24%,
    100% 24%,
    100% 100%,
    0 100%,
    0 24%,
    25% 24%
  );
`;

const PictureBox = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / -1;
  background-image: url(${RandPic});
  background-size: cover;
  z-index: 999;
`;

const Word = styled.div`
  grid-row: 5 / 6;
  grid-column: 1 / -1;
  font-size: 6rem;
  color: white;
  z-index: 9;
  animation-name: example;
  animation-duration: 1.15s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

class BodyContainer extends Component {
  render() {
    return [
      <BigBlueBus>
        <img
          style={{
            maxWidth: '50%',
            maxHeight: '60%',
            margin: 'auto 5% .5rem 5%'
          }}
          src={busText}
        />
      </BigBlueBus>,
      <CircleTT>
        <img
          style={{
            maxWidth: '60%',
            maxHeight: '60%',
            margin: 'auto auto 1rem 35%'
          }}
          src={TT}
        />
      </CircleTT>,
      <PictureWordContainer color={this.props.color}></PictureWordContainer>,
      <PictureBox />,
      <Word>{this.props.word.toUpperCase()}</Word>,
      <TimeBox />
    ];
  }
}

export default BodyContainer;
