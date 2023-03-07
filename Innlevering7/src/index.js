import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, NavLink } from 'react-router-dom';
import Students from './components/Students';
import Studies from './components/Studies';
import Menu from './components/Menu';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <div>
      <Menu />
      <Route exact path="/students" component={Students} />
      <Route path="/studies" component={Studies} />
    </div>
  </HashRouter>
);
