import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// 导入Login页面
import LoginPage from './containers/LoginExample'
import LoginPage2 from './containers/Login'
import LoginPage3 from './containers/test'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login-example" component={LoginPage} />
        <Route path="/login-example2" component={LoginPage2} />
        <Route path="/login-example3" component={LoginPage3} />>
      </Switch>
    </Router>
  );
}

export default App;
