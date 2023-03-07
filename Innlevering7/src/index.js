import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, NavLink } from 'react-router-dom';
// import Menu from "./components/Menu";
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Interests from './pages/Interests';
import { Component } from 'react-simplified';
import Menu from './components/Menu';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <div>
      <Menu />
      <Route exact path="/" component={Home} />
      <Route path="/education" component={Education} />
      <Route path="/experience" component={Experience} />
      <Route path="/interests" component={Interests} />
    </div>
  </HashRouter>
);
