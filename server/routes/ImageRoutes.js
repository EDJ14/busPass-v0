const cloudUpload = require('../services/gCloudUpload');
const multer = require('multer');
const vision = require('../services/cloudVision');
const analyzeColor = require('../services/analyzeColor');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(
      null,
      /*new Date().toISOString().replace(/:/g, '-') +*/ file.originalname
    );
  }
});

const upload = multer({
  storage: storage
  //limits: { fileSize: 1024 * 1024 * 5 }
});

module.exports = app => {
  app.post('/api/upload', upload.single('myImage'), async (req, res) => {
    console.log(req.file);
    const path = './uploads/' + req.file.filename;

    //cloudUpload(path);
    vision(path);
    //analyzeColor(path);

    res.sendStatus(200);
  });
};
