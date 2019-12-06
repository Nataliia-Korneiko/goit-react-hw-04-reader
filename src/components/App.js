import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Reader from './Reader/Reader';
import publications from './publications.json';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Switch>
          <Route
            path="/"
            render={props => <Reader {...props} items={publications} />}
          />
        </Switch>
      </>
    );
  }
}

export default App;
