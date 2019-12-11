import React, { Component } from 'react';
import styled from 'styled-components';
import * as Vibrant from 'node-vibrant';

import busText from '../img/bigBlueBus.JPG';
import TT from '../img/TT.JPG';

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

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 10rem solid transparent;
  border-right: 10rem solid transparent;
  border-bottom: 14rem solid ${props => props.color};
  position: absolute;
  left: 30.7vw;
  top: 112vh;
`;

const PictureWordContainer = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  background-color: ${props => props.color};

  clip-path: polygon(
    50% 0,
    75% 14%,
    100% 14%,
    100% 100%,
    0 100%,
    0 14%,
    24% 14%
  );
`;

class BodyContainer extends Component {
  changeColor = newColor => {
    this.props.goBack();
  };

  render() {
    let v = new Vibrant(TT);
    v.getPalette((err, palette) => console.log(palette));

    return [
      <BigBlueBus>
        <img
          style={{
            height: 'fit-content',
            width: 'fit-content',
            margin: 'auto 15vw 1rem 4vw'
          }}
          src={busText}
        />
      </BigBlueBus>,
      <CircleTT>
        <img
          style={{
            height: 'fit-content',
            width: 'fit-content',
            margin: 'auto 4vw 1rem 15vw'
          }}
          src={TT}
        />
      </CircleTT>,
      <PictureWordContainer color={this.props.color}></PictureWordContainer>
    ];
  }
}

export default BodyContainer;
