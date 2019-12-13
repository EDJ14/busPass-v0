import React, { Component } from 'react';
import styled from 'styled-components';

const TimeBoxContainer = styled.div`
  font-size: 11rem;
  z-index: 99;
  grid-row: 7 / 8;
  grid-column: 1 / -1;
  color: white;
  font-weight: bold;
  margin: auto;

  height: fill-available;
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
          (newTime.getSeconds() < 10 ? '0' : '') +
          newTime.getSeconds()
      });
    }, 1000);

    return <TimeBoxContainer>{this.state.time}</TimeBoxContainer>;
  }
}

export default TimeBox;
