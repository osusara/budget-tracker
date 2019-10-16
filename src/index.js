import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Login from "./components/userManagement/Login";
import Loading from "./components/layout/Loading"
import firebaseApp from "./firebase";

class Root extends Component{
  constructor() {
    super();
    this.state = {
      user: null,
      isLoading: false
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    this.setState({ isLoading: true });

    firebaseApp.auth().onAuthStateChanged(user => {
      // console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });

    this.setState({ isLoading: false });
  }

  render() {
    return (
      <div>
        {this.state.isLoading? <Loading /> : <div>
          {this.state.user ? <App userid={this.state.user.uid} /> : <Login />}
        </div>}
      </div>
    );
  }
}

export default Root

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
