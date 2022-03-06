import './App.css';
import React from 'react';
import Login1 from './components/login/Login1';
import News from './components/News';
import Sports from './components/Sports';
import AddTournament from './components/adminpage/AddTournament';
import AllTournament from './components/adminpage/AllTournament';
import EditTournament from './components/adminpage/EditTournament';
import Register from './components/register/Register';
import Adminpage from './components/adminpage/Adminpage';
import Homepage from './components/homepage/Homepage';
import Adminlogin from './components/adminlogin/Adminlogin';
import Home from './components/Pages/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState } from 'react';

{/*Alt+Shft+down+arrow to copy same content here */}

function App() {
  const [ user, setLoginUser] = useState({})
  const [ admin, setAdminUser] = useState({})
  return (
    <div className="App">
    <Router>
        
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/login1">
            <Login1 setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/adminlogin">
            <Adminlogin setAdminUser={setAdminUser}/>
          </Route>
          <Route path="/adminpage">
            {
              admin && admin._id ? <Adminpage setAdminUser={setAdminUser} /> : <Adminlogin setAdminUser={setAdminUser}/>
            }
          </Route>
          <Route path="/AddTournament">
            <AddTournament/>
          </Route>
          <Route path="/AllTournament">
            <AllTournament/>
          </Route>
          <Route path="/EditTournament">
            <EditTournament/>
          </Route>
          <Route path="/News">
            <News />
          </Route>
          <Route path="/Sports">
            <Sports />
          </Route>
          <Route exact path="/homepage">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login1 setLoginUser={setLoginUser}/>
            }
          </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
