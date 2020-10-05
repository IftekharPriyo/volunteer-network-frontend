import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Admin from './Components/Admin/Admin';
import Auth from './Components/Auth/Auth';
import ChooseTask from './Components/ChooseTask/ChooseTask';
import Dash from './Components/Dash/Dash';
import Individuals from './Components/Individuals/Individuals';

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
          <Route exact path='/individuals'>
            <Individuals></Individuals>
          </Route>
          <Route exact path='/admin'>
            <Admin></Admin>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>

  );
}

export default App;
