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
        <td>
          {income ? <img src={up} alt="+" /> : <img src={down} alt="-" />}
        </td>
        <td>
          <button
            className="btn btn-sm btn-dark"
            style={btn}
            onClick={this.props.removeEvent.bind(this, id)}
          >
            Remove
          </button>
        </td>
      </tr>
    );
  }
}

const btn = {
  border: "none",
  borderRadius: "100px",
  backgroundImage: "linear-gradient(to right, #545454 0%, #444 100%)",
  width: "60%"
};

export default EventItem;
