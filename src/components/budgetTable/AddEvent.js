import React, { Component } from "react";
import { Container, Form, Row, Col, Button, Card } from "react-bootstrap";

import Error from "../warnings/Error";

class AddEvent extends Component {
  state = {
    title: "",
    amount: "",
    income: false,
    error: ""
  };

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
  onAmountChange = (e) => {
    if(isNaN(e.target.value)){
      this.setState({
        amount: "",
        errors: "Enter only numbers in Amount field",
      });
    } else {
      this.setState({
        amount: e.target.value,
        errors: "",
      });
    }
  }

  inEvent = (e) => {
    e.preventDefault();

    let currentDateTime = this.getCurrentDateTime();
    //console.log(currentDateTime);

    this.props.addEvent(
      currentDateTime,
      this.state.title,
      this.state.amount,
      true
    );
    this.setState({
      title: "",
      amount: "",
    });
  };

  outEvent = (e) => {
    e.preventDefault();

    let currentDateTime = this.getCurrentDateTime();
    //.log(currentDateTime)

    this.props.subEvent(
      currentDateTime,
      this.state.title,
      this.state.amount,
      false
    );
    this.setState({
      title: "",
      amount: "",
    });
  };

  render() {
    return (
      <Container>
        <Card className="add-event-card shadow-sm my-4">
          <Card.Body>
            {this.state.errors ? <Error message={this.state.errors} /> : null}
            <Form>
              <Row className="text-center">
                <Col md={6} xs={12} className="mx-auto my-auto">
                  <Form.Control
                    className="add-event-input"
                    type="text"
                    name="title"
                    placeholder="Add a new event"
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </Col>
                <Col md={4} xs={12} className="mx-auto my-auto">
                  <Form.Control
                    className="add-event-input"
                    type="text"
                    pattern="[0-9]*"
                    name="amount"
                    placeholder="Add amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                  />
                </Col>
                <Col md={2} xs={8} className="mx-auto my-auto">
                  <Button
                    className="btn-light add-event-btn mx-2"
                    name="in"
                    onClick={this.inEvent}
                  >
                    <i className="fas fa-plus"></i>
                  </Button>
                  <Button
                    className="btn-light sub-event-btn mx-2"
                    name="out"
                    onClick={this.outEvent}
                  >
                    <i className="fas fa-minus"></i>
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default AddEvent;
