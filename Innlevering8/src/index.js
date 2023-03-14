import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, NavLink } from 'react-router-dom';
import Students from './pages/Students';
import Studies from './pages/Studies';
import Menu from './components/Menu';
import Student from './pages/Student';
import Study from './pages/Study';
import Admin from './pages/Admin';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <div>
      <Menu />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/students" component={Students} />
      <Route path="/students/:id" component={Student} />
      <Route exact path="/studies" component={Studies} />
      <Route path="/studies/:tag" component={Study} />
    </div>
  </HashRouter>
);
