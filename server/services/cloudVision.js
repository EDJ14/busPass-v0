const axios = require('axios');
const keys = require('../config/keys');
// Read the file into memory.
var fs = require('fs');

module.exports = img => {
  var imageFile = fs.readFileSync(img);

  // Convert the image data to a Buffer and base64 encode it.
  var encoded = Buffer.from(imageFile).toString('base64');

  const body = {
    requests: [
      {
        image: {
          content: encoded
        },
        features: [
          {
            type: 'TEXT_DETECTION',
            maxResults: 1
          }
        ]
      }
    ]
  };

  return axios
    .post(
      'https://vision.googleapis.com/v1/images:annotate?key=' +
        keys.googleVisionKey,
      body
    )
    .then(function(res) {
      const { text } = res.data.responses[0].fullTextAnnotation;
      console.log(text.slice(53, text.length - 18));
      return text.slice(55, text.length - 18);
    });
};
