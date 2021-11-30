import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './Greeting';
import configureStore from './configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <h1 style={{ margin: 'auto', width: '80%', textAlign: 'center' }}>
              To check the greeting go to this
              {' '}
              <a href="/greeting">link</a>
            </h1>
          )}
        />
        <Route
          path="/greeting"
          render={() => <Greeting greeting="Friend" />}
        />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
