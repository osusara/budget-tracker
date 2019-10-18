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
    borderRadius: "100px",
    width: "90%",
    backgroundImage: "linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%)",
    color: "#FFF"
}

export default Error
