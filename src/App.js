import React from 'react';

import Navbar from './Navbar'
import {Route, Link, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Achievement  from './Achievement';
import Contact from "./Contact";
import livescore from "./Livescore";
import Schedule from './Schedule';
import login from './Login';


const App = () => {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Navbar/>
        <Route exact path="/" component={Home} />

        <Route exact path="/Livescore" component={livescore} />

        <Route exact path="/Schedule" component={Schedule} />
        
        <Route exact path="/Achievement" component={Achievement} />
          
        <Route exact path="/Contact" component={Contact} />

        <Route exact path="/Login" component={login} />
        </BrowserRouter>
      </div>
      
    
  )
}

export default App
