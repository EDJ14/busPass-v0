const axios = require('axios');
const keys = require('./keys');
// Read the file into memory.
var fs = require('fs');
var imageFile = fs.readFileSync('./src/img/BuildingPic.jpg');

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

axios
  .post(
    'https://vision.googleapis.com/v1/images:annotate?key=' +
      keys.googleVisionKey,
    body
  )
  .then(function(res) {
    console.log(res.data.responses[0].fullTextAnnotation.text);
  });
