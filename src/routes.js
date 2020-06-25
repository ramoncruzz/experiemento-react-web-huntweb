import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Artigo from './pages/artigo';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/artigo/:id" component={Artigo} />
        </Switch>
    </BrowserRouter>
);
export default Routes;