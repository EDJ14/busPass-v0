import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ChoosePicture from './ChoosePicture';

const ImgInputContainter = styled.div``;

class InputImage extends React.Component {
  state = { file: null };

  onFormSubmit = async e => {
    e.preventDefault();

    this.props.setLoading();

    const formData = new FormData();
    formData.append('myImage', this.state.file, this.state.file.name);

    axios
      .post('api/upload', formData, {
        onUploadProgress: progressEvent => {
          'Upload Progress" ', progressEvent.loaded / progressEvent.total;
        }
      })
      .then(res => {
        console.log(res);
        const { rgb } = res.data.colors;
        this.props.chosenImage(
          `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
          res.data.words
        );
      });
  };

  onChange = e => {
    this.setState({ file: e.target.files[0] });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" name="myImage" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
    );
  }
}

export default InputImage;
