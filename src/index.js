import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import Main from './components/main';
import Addproducts from './components/addproducts';
import Bookings from './components/bookings';

ReactDOM.render(
  <Router>
  <Switch>
    <Route path="/login">
      <Login/>
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
   
    <Route exact path="/main">
      <Main/>
    </Route>
    <Route exact path="/">
      <App/>
    </Route>
    <Route exact path="/addproducts">
      <Addproducts/>
    </Route>
    <Route exact path="/bookings">
      <Bookings/>
    </Route>
  </Switch>
</Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
