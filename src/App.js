import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from './pages/Home';
import Lessons from './pages/Lessons';
import FileUpload from './pages/FileUpload';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/redux" component={Lessons} />
      <Route exact path="/upload" component={FileUpload} />
    </Switch>
  </BrowserRouter>
);

export default App;
