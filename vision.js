/*const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

const fileName = '/src/img/wakeupcat.jpg';

// Performs text detection on the local file
const [result] = await client.textDetection(fileName);
const detections = result.textAnnotations;
console.log('Text:');
detections.forEach(text => console.log(text));*/

async function detectLabels() {
  // [START vision_label_detection]
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  const fileName = './src/img/wakeupcat.jpg';

  // Performs label detection on the local file
  const [result] = await client.labelDetection(fileName);
  const labels = result.labelAnnotations;
  console.log('Labels:');
  labels.forEach(label => console.log(label.description));
  // [END vision_label_detection]
}

detectLabels();
