import React, { Component } from "react";
import firebaseApp from "../../firebase";

import Error from '../warnings/Error'

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);

    this.state = {
      email: "",
      password: "",
      errors: "",
      // isSignUp: true
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        // console.log(error);
        this.setState({ errors: error.message });
      });
  }

  signup(e) {
    e.preventDefault();
    // this.setState({ isSignUp: false });
    this.props.isSignUp(false)
  }

  render() {
    return (
      <div className="container py-5 my-5">
        <div className="col-md-6 col-sm-10 col-xs-11 mx-auto my-5 py-5 text-center">
          <div className="card py-3 px-2" style={loginCard}>
            <h2 className="card-title">Login</h2>
            <div className="card-body">
              {this.state.errors ? <Error message={this.state.errors} /> : null}
              <form>
                <div className="form-group">
                  <input
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="email"
                    name="email"
                    className="form-control text-center"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                  <small id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <input
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    className="form-control text-center"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  onClick={this.login}
                  className="btn btn-primary"
                >
                  Login
                </button>
                <label className="text-center px-2">or</label>
                <button onClick={this.signup} className="btn btn-secondary">
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const loginCard = {
  backgroundColor: "#DDD",
  color: "#444",
  border: "none"
}

export default Login;
