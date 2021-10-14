import './App.css';
import React, { useRef, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import User from './Components/User';


function App() {
  return (
    <div className="App">
      <Route path="/" exact={true} component={Home} />
      <Route path="/user" component={User} />
    </div>
  );
}

export default App;
