import React, { Component } from 'react';
import styled from 'styled-components';
import BodyContainer from './BodyContainer';

const InputsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ColorChooser = styled.input`
  width: 33%;
  height: 10%;
  margin: auto;
`;

const PictureChooser = styled.div`
  width: 33%;
  height: 10%;
  margin: auto;
`;

const WordChooser = styled.input`
  width: 10rem;
  height: 5rem;
  font-size: 2.5rem;
`;

const Enter = styled.button`
  width: 50%;
  height: 15%;
`;

class InputPage extends Component {
  state = { color: '', word: '', picture: null, enter: 0 };

  renderContent() {
    if (!this.state.enter) {
      return (
        <InputsContainer>
          <ColorChooser
            onChange={e => this.setState({ color: e.target.value })}
          />
          <WordChooser
            onChange={e => this.setState({ word: e.target.value })}
          />
          <PictureChooser>
            ,
            <input list="pictureList" />
            <datalist id="pictureList">
              <option value="BEACH" />
              <option value="PIER" />
              <option value="STOPLIGHT" />
              <option value="BUILDING" />
              <option value="SHADE" />
            </datalist>
            ,
          </PictureChooser>
          <Enter onClick={() => this.setState({ enter: 1 })} />
        </InputsContainer>
      );
    } else {
      return (
        <BodyContainer
          color={this.state.color}
          word={this.state.word}
          picture={this.state.picture}
          goBack={() => this.setState({ enter: 0 })}
        />
      );
    }
  }

  render() {
    return this.renderContent();
  }
}

export default InputPage;
