import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home/';
import PreRegister from 'pages/PreRegister';
import Thanks from 'pages/Thanks'


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/preregister' exact component={PreRegister} />
        <Route path='/thanks' exact component={Thanks} />
      </Switch>
    </BrowserRouter>
  );
}