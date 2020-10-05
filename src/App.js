import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from './pages/Home';
import Lessons from './pages/Lessons';
import FileUpload from './pages/FileUpload';
import Crud from './pages/Crud';
import Analytics from './pages/Analytics';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/redux" component={Lessons} />
      <Route exact path="/upload" component={FileUpload} />
      <Route exact path="/crud" component={Crud} />
      <Route exact path="/analytics" component={Analytics} />
    </Switch>
  </BrowserRouter>
);

export default App;
