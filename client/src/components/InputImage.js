import React from 'react';
import axios from 'axios';

class InputImage extends React.Component {
  state = { file: null };

  onFormSubmit = async e => {
    e.preventDefault();
    console.log(e.target);
    const formData = new FormData();
    formData.append('myImage', this.state.file);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    fetch('/api/upload', {
      method: 'POST',
      body: formData
    }).then(res => {
      console.log(res);
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
