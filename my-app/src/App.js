import React from "react";
import {withRouter} from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import ProjectPage from "./ProjectPage/ProjectPage";
import { HeaderWR } from "./Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends React.Component {
  

  render(){
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/about">
          <AboutPage/>
        </Route>
        <Route exact path="/project">
          <ProjectPage/>
        </Route>
      </Switch>
    </Router>
  )
  }
};    

export default App;
