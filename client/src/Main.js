import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import routes from './Routes.js';
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';




// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

class Main extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router >
          <div>
            <div className="top-bar">
              <div className="top-bar-left">
                <Link to="/">React App</Link>
              </div>

              <div className="top-bar-right">
                <Link to="/login">Log in</Link>
                <Link to="/signup">Sign up</Link>
              </div>

            </div>

            <Route exact path="/" component={HomePage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/signup" component={SignUpPage}/>


          {/* <PropsRoute exact path="/" component={HomePage} />
          <PrivateRoute path="/dashboard" component={DashboardPage}/>
          <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
          <LoggedOutRoute path="/signup" component={SignUpPage}/>
          <Route path="/logout" component={LogoutFunction}/> */}

          </div>


        </Router>
      </MuiThemeProvider>
    );
  }
}

export default Main;
