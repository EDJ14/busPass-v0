const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');

const keys = require('./config/keys');

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

cloudinary.config({
  cloud_name: 'sample',
  api_key: keys.cloudinaryKey,
  api_secret: keys.cloudinarySecret
});

//require('./services/passport')(connection);
app.use(passport.initialize());
app.use(passport.session());

//require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Awaiting orders'));
