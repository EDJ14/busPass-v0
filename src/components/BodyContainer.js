import React, { Component } from 'react';
import styled from 'styled-components';
import * as Vibrant from 'node-vibrant';

import busText from '../img/bigBlueBus.JPG';
import TT from '../img/TT.JPG';
import RandPic from '../img/image0.jpg';
import TimeBox from './Time';

const ColorButton = styled.button`
  width: 4rem;
  heigh: 2rem;
  backgorund-colo: blue;
`;

const BigBlueBus = styled.div`
  position: absolute;
  left: 0;
  background-color: white;
  height: 33%;
  width: 50%;

  display: flex;
  flex-direction: column;
`;

const CircleTT = styled.div`
  position: absolute;
  right: 0;
  background-color: rgb(44, 156, 212);
  height: 33%;
  width: 50%;

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
  font-size: 8rem;
  color: white;
  z-index: 9;
  margin: auto;
`;

class BodyContainer extends Component {
  changeColor = newColor => {
    this.props.goBack();
  };

  render() {
    return [
      <BigBlueBus>
        <img
          style={{
            height: 'fit-content',
            width: 'fit-content',
            margin: 'auto 3rem'
          }}
          src={busText}
        />
      </BigBlueBus>,
      <CircleTT>
        <img
          style={{
            height: 'fit-content',
            width: 'fit-content',
            margin: 'auto 3rem'
          }}
          src={TT}
        />
      </CircleTT>,
      <PictureWordContainer color={this.props.color}></PictureWordContainer>,
      <PictureBox />,
      <Word>PIER</Word>,
      <TimeBox />
    ];
  }
}

export default BodyContainer;
