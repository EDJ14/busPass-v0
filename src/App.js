import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import BodyContainer from './components/BodyContainer';

class App extends Component {
  componentDidMount() {
    //this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Route exact path="/" component={BodyContainer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
