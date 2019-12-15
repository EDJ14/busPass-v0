var Vibrant = require('node-vibrant');

module.exports = path => {
  let v = new Vibrant(path);
  return v.getPalette((err, palette) => {
    console.log(palette.DarkVibrant);
    return palette.DarkVibrant;
  });
  // Promise
  //v.getPalette().then(palette => console.log(palette));
};
