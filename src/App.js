import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './component/header';
import Home from './component/home';


function App() {
  return (
    
    <Router>
    <Fragment>
    <Switch>
   <Route exact path="/" component={Header}/>
   <Route exact path="/" component={Home}/>
 
   </Switch>
   </Fragment>
   
   </Router> 
  
  
  
  );
}

export default App;
