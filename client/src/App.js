import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Admin from './Components/Admin/Admin';
import User from "./Components/User/User";

function App() {

  const [users, setUsers] = useState()

  useEffect(() => {
    fetch('http://localhost:5000/admin')
      .then(data => data.json())
      .then(data => setUsers(data))
      .catch(err => err)
  }, [])

  return (
    <>
      {users ?
        <div className="App">
          <Router>
            <Switch>
              <Route exact path='/'>
                <Admin users={users} setUsers={setUsers} />
              </Route>
              <Route path='/user/:id' children={<User users={users} setUsers={setUsers} />} />
            </Switch>
          </Router>
        </div>
        :
        null
      }
    </>

  );
}

export default App;
