import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Auth from './Components/Auth/Auth';
import ChooseTask from './Components/ChooseTask/ChooseTask';
import Dash from './Components/Dash/Dash';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <div>
      <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Dash></Dash>
          </Route>
          <Route path='/chooseTask/:id'>
          <ChooseTask></ChooseTask>
        </Route>
          <Route exact path='/login'>
            <Auth></Auth>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>

  );
}

export default App;
