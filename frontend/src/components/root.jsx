import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting';


const Root = () => (
  <div>
    <Route path="/" component={GreetingContainer}/>
  </div>
);

export default Root;
