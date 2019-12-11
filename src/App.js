import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import BodyContainer from './components/BodyContainer';
import InputPage from './components/InputPage';

class App extends Component {
  componentDidMount() {
    //this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Route exact path="/" component={InputPage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
