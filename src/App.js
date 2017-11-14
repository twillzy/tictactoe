import React from 'react';
import { Route } from 'react-router-dom';
import Game from './containers/Game';
import './App.css';

export default () => (
  <main>
    <Route exact path="/" component={Game} />
  </main>
);
