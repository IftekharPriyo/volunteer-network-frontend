import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Admin from './Components/Admin/Admin';
import Auth from './Components/Auth/Auth';
import ChooseTask from './Components/ChooseTask/ChooseTask';
import Dash from './Components/Dash/Dash';
import Individuals from './Components/Individuals/Individuals';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Dash></Dash>
            </Route>
            <PrivateRoute path='/chooseTask/:id'>
              <ChooseTask></ChooseTask>
            </PrivateRoute>
            <Route path='/login'>
              <Auth></Auth>
            </Route>
            <Route path='/individuals'>
              <Individuals></Individuals>
            </Route>
            <Route path='/admin'>
              <Admin></Admin>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>

  );
}

export default App;
