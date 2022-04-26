import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import Home from './pages/Home';
import { PrivateRoute } from './routes/PrivateRoute';

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
        <PrivateRoute path="/home">
          <Home />
        </PrivateRoute>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
