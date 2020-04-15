import React, { Component } from "react";
import { Button } from "react-bootstrap";
import down from "../../assets/down.png";
import up from "../../assets/up.png";

class EventItem extends Component {
  render() {
    const { id, dateTime, title, amount, income } = this.props.event;

    return (
      <tr>
        <td>{dateTime}</td>
        <td>{title}</td>
        <td>{Number(amount).toFixed(2)}</td>
        <td className="arrow-column">
          {income ? <img className="arrow" src={up} alt="+" /> : <img className="arrow" src={down} alt="-" />}
        </td>
        <td className="text-center clear-column">
          <Button
            className="clear-btn"
            onClick={this.props.removeEvent.bind(this, id)}
          >
            {" "}
            <i className="fas fa-trash"></i>
            {" "}
          </Button>
        </td>
      </tr>
    );
  }
}


export default EventItem;
