import React, { Component } from "react";
import { Button } from "react-bootstrap";
import down from "../../assets/down.png";
import up from "../../assets/up.png";

class EventItem extends Component {
  render() {
    const { id, dateTime, title, amount, income } = this.props.event;

    return (
      <tr>
        <td style={{ width: "20% !important" }} className="align-middle">
          {dateTime}
        </td>
        <td style={{ width: "40% !important" }} className="align-middle">
          {title}
        </td>
        <td style={{ width: "20% !important" }} className="align-middle">
          {Number(amount).toFixed(2)}
        </td>
        <td style={{ width: "10% !important" }} className="align-middle">
          {income ? (
            <img className="arrow" src={up} alt="+" />
          ) : (
            <img className="arrow" src={down} alt="-" />
          )}
        </td>
        <td
          style={{ width: "10% !important" }}
          className="text-center clear-column"
        >
          <Button
            variant="link"
            className="clear-btn"
            onClick={this.props.removeEvent.bind(this, id)}
          >
            {" "}
            <i className="fas fa-trash"></i>{" "}
          </Button>
        </td>
      </tr>
    );
  }
}


export default EventItem;
