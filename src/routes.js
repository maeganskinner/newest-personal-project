import React from "react";
import { Switch, Route } from "react-router-dom";
//components 
import LoginAndRegister from './components/LoginAndRegister';
import Cart from './components/Cart';
import Shop from './components/Shop';
import Reviews from './components/Reviews';
import Landing from "./components/Landing";

export default (
    <Switch>
        <Route component={Shop} path="/shop" />
        <ROute component={Cart} path="/cart" />
        <Route component={Reviews} path="/reviews" />
        <Route component={LoginAndRegister} path="/LoginAndRegister"  />
        <Route component={Landing} path="/" exact />
    </Switch>
)
