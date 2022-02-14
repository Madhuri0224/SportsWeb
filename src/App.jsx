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
        <Route path="/" component={Home} />

        <Route path="/Livescore" component={livescore} />

        <Route path="/Schedule" component={Schedule} />
        
        <Route path="/Achievement" component={Achievement} />
          
        <Route  path="/Contact" component={Contact} />

        <Route  path="/Login" component={login} />
        </BrowserRouter>
      </div>
      
    
  )
}

export default App
