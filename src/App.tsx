import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/registration">
          <AuthPage />
        </Route>
        <Route path="/login">
          <AuthPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
