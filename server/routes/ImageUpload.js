const cloudUpload = require('../services/cloudUpload');
const fs = require('fs');

module.exports = app => {
  app.post('/api/upload', (req, res) => {
    console.log(req.body);

    // cloudUpload(req.IMAGE)
  });
};
