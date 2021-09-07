import React from "react";
import ReactDOM from "react-dom";
import {Switch,Route,BrowserRouter} from'react-router-dom';
import './global.css';
import { UserContextProvider } from "./context/UserData";
import { Home } from "./templates/Home";
import { UserData } from './templates/User/index';
import { Aside } from './components/Aside/index';

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
    <BrowserRouter>
    <Aside />
    <Switch>
      <Route path="/" exact component={Home}  />
      <Route path="/userdata" exact component={UserData}  />
    </Switch>
    </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
