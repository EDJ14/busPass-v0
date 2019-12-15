import React from 'react';
const axios = require('axios');

class InputImage extends React.Component {
  state = { file: null };

  onFormSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('myImage', this.state.file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };

    for (var key of formData.entries()) {
      console.log(key[0] + ', ' + key[1]);
    }

    axios
      .post('/api/upload', formData, config)
      .then(response => {
        console.log(response);
        alert('The file is successfully uploaded');
      })
      .catch(error => {});
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
