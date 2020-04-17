import React, { Component } from 'react'

class Error extends Component {
    render() {
        return (
            <div className="alert alert-danger mx-auto" style={error}>
                {this.props.message}
            </div>
        )
    }
}

const error = {
  border: "none",
  borderRadius: "0.5rem",
  width: "90%",
  backgroundColor: "#ea5455",
  color: "#FFF",
};

export default Error
