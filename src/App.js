import React from 'react';
import './App.css';
import Home from "./components/home";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
    <div className="App">
        <Switch>
          <Route exact activeClassName="active" path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
