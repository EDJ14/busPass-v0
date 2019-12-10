import React, { Component } from 'react';
import styled from 'styled-components';
import busText from '../img/bigBlueBus.JPG';
import TT from '../img/TT.JPG';

const Inputs = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  background-color: gray;
`;

const ColorButton = styled.button`
  width: 4rem;
  heigh: 2rem;
  backgorund-colo: blue;
`;

const BigBlueBus = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  background-color: white;

  display: flex;
  flex-direction: column;
`;

const CircleTT = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  background-color: rgb(85, 163, 241);

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
  grid-row: 3 / -1;
  grid-column: 1 / -1;
  background-color: ${props => props.color};
`;

class BodyContainer extends Component {
  state = { color: 'orange' };

  changeColor = newColor => {
    this.setState({ color: newColor });
  };

  render() {
    return [
      <Inputs>
        <ColorButton onClick={() => this.changeColor('red')} />
      </Inputs>,
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
            margin: 'auto 0 1rem 10rem'
          }}
          src={TT}
        />
      </CircleTT>,
      <Triangle color={this.state.color} />,
      <PictureWordContainer color={this.state.color} />
    ];
  }
}

export default BodyContainer;
