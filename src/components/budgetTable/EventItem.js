import React, { Component } from 'react'
import down from '../../assets/down.png'
import up from "../../assets/up.png"

class EventItem extends Component {
    
    render() {

        const { id, dateTime, title, amount, income } = this.props.event;



        return (
          <tr>
            <td>{dateTime}</td>
            <td>{title}</td>
            <td>{Number(amount).toFixed(2)}</td>
            <td>{income? <img src={up} alt="+" /> : <img src={down} alt="-" />}</td>
            <td><button className="btn btn-sm btn-danger" onClick={this.props.removeEvent.bind(this, id)}>Remove</button></td>
          </tr>
        );
    }
}

export default EventItem