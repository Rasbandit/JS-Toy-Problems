import React, { Component } from 'react';
import { Switch, Route, HashRouter, Link } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from "./Components/Dashboard";
import Contact from "./Components/Contact";
import Home from "./Components/Home";

export default class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    }
  }

  logIn = () => {
    this.setState({
      loggedIn: true
    })
  }

  render() {
    return (
      <HashRouter>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/login"
              exact
              render={props =>
                <Login {...props} loggedIn={this.state.loggedIn} logIn={this.logIn.bind(this)} />
              }
            />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/contact" component={Contact} />

          </Switch>
        </div>
      </HashRouter>
    )
  }
}

