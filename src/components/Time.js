import React, { Component } from 'react';
import styled from 'styled-components';

const TimeBoxContainer = styled.div`
  font-size: 10%;
  z-index: 99;
  position: absolute;
  bottom: 3rem;
  margin: auto;
`;

class TimeBox extends Component {
  state = { time: '' };

  render() {
    setTimeout(() => {
      const newTime = new Date();
      this.setState({
        time:
          newTime.getHours() +
          ':' +
          newTime.getMinutes() +
          ':' +
          newTime.getSeconds()
      });
    }, 1000);

    return <TimeBoxContainer>{this.state.time}</TimeBoxContainer>;
  }
}

export default TimeBox;
