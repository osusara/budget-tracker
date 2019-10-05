import React, { Component } from 'react'

class AddEvent extends Component {

    state = {
        title:'',
        amount:'',
        income: false
    }

    getCurrentDateTime = () => {
      let today = new Date();
      let date = 
        ("0" + today.getFullYear()).slice(-2) +
        "/" +
        ("0" + (today.getMonth() + 1)).slice(-2) +
        "/" +
        ("0" + today.getDate()).slice(-2) +
        " | " +
        ("0" + today.getHours()).slice(-2) +
        ":" +
        ("0" + today.getMinutes()).slice(-2) +
        ":" +
        ("0" + today.getSeconds()).slice(-2);

    return date;
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    inEvent = (e) => {
        e.preventDefault();

        let currentDateTime = this.getCurrentDateTime();
        //console.log(currentDateTime);

        this.props.addEvent(currentDateTime, this.state.title, this.state.amount, true);
        this.setState({
            title: '',
            amount: ''
        })
    }

    outEvent = (e) => {
        e.preventDefault();

        let currentDateTime = this.getCurrentDateTime();
        //.log(currentDateTime)

        this.props.subEvent(currentDateTime, this.state.title, this.state.amount, false);
        this.setState({
            title: '',
            amount: ''
        })
    }

    render() {
        return (
          <div style={addEvent}>
            <div className="container">
              <form className="form mx-auto">
                <div className="row text-center">
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      type="text"
                      name="title"
                      placeholder="Add a new event"
                      value={this.state.title}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      className="form-control"
                      type="text"
                      name="amount"
                      placeholder="Add amount"
                      value={this.state.amount}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="col-md-1">
                    <button className="btn btn-success" name="in" style={btn} onClick={this.inEvent}>
                      +
                    </button>
                  </div>
                  <div className="col-md-1">
                    <button className="btn btn-danger" name="out" style={btn} onClick={this.outEvent}>
                      -
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        );
    }
}

const btn = {
    width: '100%',
}

const addEvent = {
    background: '#555',
    padding: '20px',
}

export default AddEvent