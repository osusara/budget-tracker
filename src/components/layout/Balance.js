import React, { Component } from "react";

class Balance extends Component {
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
  background: "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898", 
  backgroundBlendMode: "multiply,multiply",
};

const card = {
  margin: "10px 0",
  padding: "20px 0 10px 0",
  backgroundImage: "linear-gradient(to right, #434343 0%, #222 100%)",
  color: "#FFF",
  border: "none",
  borderRadius: "20px"
};

export default Balance