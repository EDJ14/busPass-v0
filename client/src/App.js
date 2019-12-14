import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import BodyContainer from './components/BodyContainer';
import InputPage from './components/InputPage';
import Picture from './components/Picture';
import getWord from './components/GetWord';
import InputImage from './components/InputImage';

class App extends Component {
  componentDidMount() {
    //this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Route exact path="/" component={InputPage} />
          <Route exact path="/pic" component={Picture} />
          <Route exact path="/tess" component={getWord} />
          <Route exact path="/img" component={InputImage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
