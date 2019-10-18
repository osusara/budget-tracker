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
        <div className="col-md-5 col-sm-8 col-xs-11 mx-auto my-5 py-5 text-center">
          <div className="card py-3 px-2" style={loginCard}>
            <h3 className="card-title" style={headerText}>Login</h3>
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
                    style={input}
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    className="form-control text-center"
                    style={input}
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  onClick={this.login}
                  className="btn btn-primary"
                  style={button}
                >
                  Login
                </button>
                <p className="text-center px-2">
                  Don't have an account?{" "}
                  <label onClick={this.signup} style={link} >
                    Sign up
                  </label>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const loginCard = {
  backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  color: "#444",
  border: "none",
  borderRadius: "15px",
  boxShadow: "1px 2px 5px #DDD"
};

const headerText = {
  color: "#555"
};

const input = {
  border: "none",
  borderRadius: "100px",
  width: "90%",
  margin: "auto"
};

const button = {
  backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  border: "none",
  borderRadius: "100px",
  width: "45%",
  margin: "2% 0 4% 0"
};

const link = {
  color: "#764ba2",
  cursor: "pointer"
};

export default Login;
