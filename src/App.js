import React, {useEffect} from 'react';
import {store, increment} from './redux';
import {Switch, Route} from "react-router-dom";


import Home from './pages/Home'
import FileUpload from './pages/FileUpload'

const App = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/upload" component={FileUpload} />
    </Switch>
);

export default App;
