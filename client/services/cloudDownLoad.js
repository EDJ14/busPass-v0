// Imports the Google Cloud client library
const { Storage } = require('@google-cloud/storage');

// Creates a client
const storage = new Storage();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const bucketName = 'bus-pass-bucket';
const srcFilename = 'BuildingPic.jpg';
const destFilename = './cloudDL.jpg';

const options = {
  // The path to which the file should be downloaded, e.g. "./file.txt"
  destination: destFilename
};

// Downloads the file
const getPic = async () => {
  await storage
    .bucket(bucketName)
    .file(srcFilename)
    .download(options);

  console.log(
    `gs://${bucketName}/${srcFilename} downloaded to ${destFilename}.`
  );
};

getPic();
