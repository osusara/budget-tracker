import React, { Component } from "react";
import { db } from "./firebase";
import uuid from 'uuid';
import "./App.css";

import Header from "./components/layout/Header";
import Events from './components/budgetTable/Events'
import AddEvent from "./components/budgetTable/AddEvent"
import Balance from "./components/layout/Balance"

class App extends Component {
  state = {
    events: [],
    total: 0
  };

  componentDidMount() {
    this.getData();
  }

  // getCurrentDateTime = () => {
  //   let today = new Date();
  //   let date = 
  //     ("0" + today.getFullYear()).slice(-2) +
  //     "/" +
  //     ("0" + (today.getMonth() + 1)).slice(-2) +
  //     "/" +
  //     ("0" + today.getDate()).slice(-2) +
  //     " | " +
  //     ("0" + today.getHours()).slice(-2) +
  //     ":" +
  //     ("0" + today.getMinutes()).slice(-2) +
  //     ":" +
  //     ("0" + today.getSeconds()).slice(-2);

  //   return date;
  // };

  getData = () => {
    db.collection("events").orderBy('dateTime', 'desc')
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({
          events: data
        });

        this.getTotal();
      });
  };

  getTotal = () => {
    this.setState({ total: 0 });
    let total = 0;
    this.state.events.forEach(event => {
      if (event.income) {
        total += Number(event.amount);
        //this.setState({ total: (this.state.total += Number(event.amount)) });
      } else {
        total -= Number(event.amount);
        //this.setState({ total: (this.state.total -= Number(event.amount)) });
      }
    });

    //console.log(total)
    this.setState({ total: total });
  };
    
  addEvent = (dateTime, title, amount, income) => {
    db.collection("events")
      .add({
        id: uuid.v4(),
        dateTime,
        title,
        amount,
        income
      })
      .then(res => {
        //console.log(res)
        //this.setState({ events: [...this.state.events, title] });
        this.getData();
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  subEvent = (dateTime, title, amount, income) => {
    db.collection("events")
      .add({
        id: uuid.v4(),
        dateTime,
        title,
        amount,
        income
      })
      .then(res => {
        //this.setState({ events: [...this.state.events, title] });
        this.getData();
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  removeEvent = id => {
    db.collection("events")
      .where("id", "==", id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          db.collection("events")
            .doc(`${doc.id}`)
            .delete()
            .then(function() {
              console.log("Document successfully deleted!");
            })
            .catch(function(error) {
              console.error("Error removing document: ", error);
            });

          this.getData();
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  };

  render() {
    return (
      <div>
        <Header />
        <AddEvent addEvent={this.addEvent} subEvent={this.subEvent} />
        <Balance total={this.state.total} />
        <Events events={this.state.events} removeEvent={this.removeEvent} />
      </div>
    );
  }
}

export default App;
