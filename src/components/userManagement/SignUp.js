import React, { Component } from "react";
import firebaseApp from "../../firebase";

import Error from "../warnings/Error";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);

    this.state = {
      name: "",
      email: "",
      password: "",
      errors: ""
      // isSignUp: false
    };
  }

  db = firebaseApp.firestore();

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    // this.setState({ isSignUp: true });
    this.props.isSignUp(true);
  }

  signup(e) {
    e.preventDefault();

    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log(u);
        this.addUserData(this.state.name, this.state.email, u.user.uid);
      })
      .catch(error => {
        // console.log(error);
        this.setState({ errors: error.message });
      });
  }

  addUserData = (name, email, uid) => {
    this.db
      .collection("users").doc(uid)
      .set({
        name,
        email
      })
      .then(res => {
        console.log(res);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    return (
      <div className="container py-5 my-5">
        <div className="col-md-5 col-sm-8 col-xs-11 mx-auto my-5 py-5 text-center">
          <div className="card shadow py-3 px-2" style={loginCard}>
            <h3 className="card-title py-2" style={headerText}>
              Create Account
            </h3>
            <div className="card-body">
              {this.state.errors ? <Error message={this.state.errors} /> : null}
              <form>
                <div className="form-group">
                  <input
                    value={this.state.name}
                    onChange={this.handleChange}
                    type="text"
                    name="name"
                    className="form-control text-center"
                    style={input}
                    placeholder="Full Name"
                  />
                </div>
                <hr className="mx-auto" style={divider} />
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
                  onClick={this.signup}
                  className="btn btn-primary"
                  style={button}
                >
                  Sign Up
                </button>
                <p className="text-center px-2">
                  Already have an account?{" "}
                  <label style={link} onClick={this.login}>
                    Login
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
  boxShadow: "1px 2px 5px #DDD",
};

const headerText = {
  color: "#555",
};

const input = {
  border: "none",
  borderRadius: "100px",
  width: "90%",
  margin: "auto",
};

const divider = {
  width: "40%",
}

const button = {
  backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  border: "none",
  borderRadius: "100px",
  width: "45%",
  margin: "2% 0 4% 0",
};

const link = {
  color: "#764ba2",
  cursor: "pointer"
};

export default SignUp