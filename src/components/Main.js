import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';



const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/' component={Home}></Route>
    </Switch>
  );
}

export default Main;