import React, { Component } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

import BodyContainer from './BodyContainer';
import InputImage from './InputImage';
import Loading from './Loading';

const InputsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const duration = 1500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

class InputPage extends Component {
  state = {
    color: '',
    word: '',
    enter: 0,
    loading: 0,
    inputinProp: false
  };

  setInputInProp = () => {
    setTimeout(() => this.setState({ inProp: true }), 1);
  };

  renderContent() {
    if (!this.state.enter) {
      this.state.inputInProp ? null : this.setInputInProp();

      return (
        <Transition in={this.state.inProp} timeout={duration}>
          {state => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              <InputsContainer>
                <InputImage
                  chosenImage={(color, word) =>
                    this.setState({ color, word, loading: 0 })
                  }
                  setLoading={() => this.setState({ enter: 1, loading: 1 })}
                />
              </InputsContainer>
            </div>
          )}
        </Transition>
      );
    } else if (this.state.loading) {
      return <Loading />;
    } else {
      return (
        <Transition in={this.state.inProp} timeout={duration}>
          {state => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              <BodyContainer
                color={this.state.color}
                word={this.state.word}
                goBack={() => this.setState({ enter: 0 })}
              />
            </div>
          )}
        </Transition>
      );
    }
  }

  render() {
    return this.renderContent();
  }
}

export default InputPage;
