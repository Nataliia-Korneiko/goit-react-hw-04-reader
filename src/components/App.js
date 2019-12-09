/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Reader from './Reader/Reader';
import publications from './publications.json';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Switch>
          <Route
            path="/reader"
            render={props => <Reader {...props} items={publications} />}
          />
          <Redirect to="/reader" />
        </Switch>
      </>
    );
  }
}

export default App;
