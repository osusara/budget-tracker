import React, { Component } from "react";

export default class Balance extends Component {
  render() {
    return (
      <div style={balance} className="container-fluid text-center mx-auto">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="card" style={card}>
              <h3 className="card-title">Balance Left</h3>
              <h1 className="display-4">{Number(this.props.total).toFixed(2)}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const balance = {
  background: "#999"
};

const card = {
  margin: "10px 0",
  padding: "20px 0 10px 0",
  background: "#444",
  color: "#FFF"
};
