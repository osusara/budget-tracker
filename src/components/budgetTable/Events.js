import React, { Component } from "react";
import { Table, Container, Button } from "react-bootstrap";
import EventItem from "./EventItem";

class Events extends Component {
  render() {
    return (
      <Container className="mt-2 pt-4">
        <Table responsive className="table mx-auto shadow-sm">
          <thead>
            <tr>
              <th>Date [Time]</th>
              <th>Event</th>
              <th>Amount</th>
              <th className="arrow-column"></th>
              <th className="text-center clear-column">
                <Button
                  onClick={this.props.clearAll}
                  className="btn-dark clear-all-btn"
                >
                  <i className="fas fa-trash"></i> All
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.events.map((event) => (
              <EventItem
                key={event.id}
                event={event}
                removeEvent={this.props.removeEvent}
              />
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

const container = {
  width: "100%",
};

const table = {
  width: "90%",
  margin: "10px 0",
};

export default Events;
