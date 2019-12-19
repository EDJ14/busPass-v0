import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import InputPage from './components/InputPage';
import ChoosePicture from './components/ChoosePicture';

class App extends Component {
  componentDidMount() {
    //this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Route exact path="/" component={InputPage} />
          <Route exact path="/choose" component={ChoosePicture} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
