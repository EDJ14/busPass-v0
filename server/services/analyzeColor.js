var Vibrant = require('node-vibrant');

module.exports = path => {
  let v = new Vibrant(path);
  v.getPalette((err, palette) => console.log(palette.Vibrant));
  // Promise
  //v.getPalette().then(palette => console.log(palette));
};
