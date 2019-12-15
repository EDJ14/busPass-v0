const cloudUpload = require('../services/cloudUpload');
const fs = require('fs');

module.exports = app => {
  app.post('/api/upload', (req, res) => {
    console.log('pinged');
    const values = Object.values(req.files);

    // cloudUpload(req.IMAGE)
  });
};
