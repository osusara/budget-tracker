import React, { Component } from "react";
import { Table, Container, Button } from "react-bootstrap";
import EventItem from "./EventItem";

class Events extends Component {
  render() {
    return (
      <Container className="mt-2 pt-4">
        <Table responsive className="mx-auto shadow-sm">
          <thead>
            <tr>
              <th style={{ width: "20% !important" }}>Date [Time]</th>
              <th style={{ width: "40% !important" }}>Event</th>
              <th style={{ width: "20% !important" }}>Amount</th>
              <th
                style={{ width: "10% !important" }}
                className="arrow-column"
              ></th>
              <th
                style={{ width: "10% !important" }}
                className="text-center clear-column"
              >
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

export default Events;
