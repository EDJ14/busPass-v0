import React from 'react';
const axios = require('axios');
import FormData from 'form-data';

class InputImage extends React.Component {
  state = { file: null };

  onFormSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    //formData.append('myImage', this.state.file);
    formData.append('foo', 'bar');
    const response = await axios({
      method: 'post',
      url: '/api/upload',
      data: { foo: 'bar' },
      headers: {
        'content-type': `multipart/form-data; boundary=${formData._boundary}`
      }
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
