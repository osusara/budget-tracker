import React, { Component } from 'react'

import EventItem from './EventItem'

class Events extends Component {

    render() {

        return (
          <div className="container">
            <table style={table} className="table mx-auto">
              <tbody>
                <tr>
                  <th>Date [Time]</th>
                  <th>Event</th>
                  <th>Amount</th>
                  <th className="arrow-column"></th>
                  <th className="text-center clear-column">
                    <button onClick={this.props.clearAll} className="btn btn-sm btn-dark clear-all-btn">
                      Clear All
                    </button>
                  </th>
                </tr>
                {this.props.events.map(event => (
                  <EventItem
                    key={event.id}
                    event={event}
                    removeEvent={this.props.removeEvent}
                  />
                ))}
              </tbody>
            </table>
          </div>
        );
    }
}

const table = {
    width: '90%',
    margin: '10px 0',
}

export default Events