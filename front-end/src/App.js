import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Signup from "./components/signup/signup";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [ user, setLoginUser] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" component={(user && user._id) ? {Homepage} : {Login}} />
          {/* <Route exact path='/' render={() => (
            user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
          )} /> */}
          {/* <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route> */}
          <Route path="register" component={Login}/>
          {/* <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route> */}
          <Route path="register" component={Signup}/>
          {/* <Route path="/register">
            <Signup />
          </Route> */}
        </Routes>
        {/* <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Signup />
          </Route>
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
