import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Records from './pages/Records';
import Costumers from './components/Records/Costumers';
import Products from './components/Records/Products';

function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/cadastros" component={Records}/>
        <Route path="/clientes" component={Costumers}/>
        <Route path="/produtos" component={Products}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routers;