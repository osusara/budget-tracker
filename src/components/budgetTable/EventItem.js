import React, { Component } from "react";
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
          <button
            className="btn btn-sm btn-dark clear-btn"
            onClick={this.props.removeEvent.bind(this, id)}
          >
            Clear
          </button>
        </td>
      </tr>
    );
  }
}


export default EventItem;
