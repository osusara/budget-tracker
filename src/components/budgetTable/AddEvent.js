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
        " [" +
        ("0" + today.getHours()).slice(-2) +
        ":" +
        ("0" + today.getMinutes()).slice(-2) +
        ":" +
        ("0" + today.getSeconds()).slice(-2) +
        "]";

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
                  <div className="col-md-6 col-sm-8 col-xs-8">
                    <input
                      className="form-control add-event-input"
                      type="text"
                      name="title"
                      placeholder="Add a new event"
                      value={this.state.title}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <input
                      className="form-control add-event-input"
                      type="text"
                      name="amount"
                      placeholder="Add amount"
                      value={this.state.amount}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="col-md-2 col-sm-5 col-xs-5">
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-xs-6">
                        <button className="btn btn-success add-event-btn" name="in" onClick={this.inEvent}>
                          +
                        </button>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6">
                        <button className="btn btn-danger add-event-btn" name="out" onClick={this.outEvent}>
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        );
    }
}

const addEvent = {
  backgroundImage: "linear-gradient(to right, #434343 0%, #222 100%)",
  padding: "20px 0"
};

export default AddEvent