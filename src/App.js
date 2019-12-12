import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import BodyContainer from './components/BodyContainer';
import InputPage from './components/InputPage';
import Picture from './components/Picture';

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
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
