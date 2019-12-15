const cloudUpload = require('../services/gCloudUpload');
const multer = require('multer');
const vision = require('../services/cloudVision');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }
});

module.exports = app => {
  app.post('/api/upload', upload.single('myImage'), async (req, res) => {
    console.log(req.file);

    cloudUpload('./uploads/' + req.file.filename);
    vision('./uploads/' + req.file.filename);

    res.sendStatus(200);
  });
};
