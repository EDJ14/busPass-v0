import React, { Component } from 'react';
import styled from 'styled-components';
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

class InputPage extends Component {
  state = { color: '', word: '', enter: 0, loading: 0 };

  renderContent() {
    console.log(this.state);

    if (!this.state.enter) {
      return (
        <InputsContainer>
          <InputImage
            chosenImage={(color, word) =>
              this.setState({ color, word, loading: 0 })
            }
            setLoading={() => this.setState({ enter: 1, loading: 1 })}
          />
        </InputsContainer>
      );
    } else if (this.state.loading) {
      return <Loading />;
    } else {
      return (
        <BodyContainer
          color={this.state.color}
          word={this.state.word}
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
