import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/Home';
import User from './Components/User';
import MbtiPage from './Components/MbtiPage';


function App() {
  return (
    <div className="App">
      <Route path="/" exact={true} component={Home} />
      <Route path="/user/:name" exact={true} component={User} />
      <Route path="/mbti/:mbti" exact={true} component={MbtiPage} />
      {/* <Route path="/board" /> */}
    </div>
  );
}

export default App;
