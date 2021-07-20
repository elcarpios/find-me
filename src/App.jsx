import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import PageNotFound from 'pages/PageNotFound';

import 'styles/App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;

