import React, { Component } from 'react';
import { Switch, Route, HashRouter, Link, withRouter } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Contact from './Components/Contact';
import Home from './Components/Home';
import ProtectedRoutes from './Components/ProtectedRoutes';

class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    };

    this.logIn = this.logIn.bind(this);
  }

  logIn() {
    console.log('hey');
    this.setState({ loggedIn: true }, () => {
      this.props.history.push('/dashboard');
    });
  }

  render() {
    console.log(this.state);
    return (
      <main>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact render={props => <Login logIn={this.logIn} {...props} />} />
          <ProtectedRoutes loggedIn={this.state.loggedIn} path="/dashboard" component={Dashboard} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    );
  }
}

export default withRouter(Routes);
