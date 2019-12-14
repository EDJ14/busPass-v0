import React, { Component } from 'react';
import styled from 'styled-components';

class InputImage extends Component {
  submitImg = e => {
    console.log(e);
  };

  render() {
    return (
      <form onChange={e => console.log(e)} onSubmit={e => this.submitImg(e)}>
        <input type="file" name="pic" accept="image/*" />
        <input type="submit" />
      </form>
    );
  }
}

export default InputImage;
