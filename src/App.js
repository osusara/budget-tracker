import React, { Component } from "react";
import firebaseApp from "./firebase";
import uuid from 'uuid';
import "./App.css";

import Header from "./components/layout/Header";
import Events from './components/budgetTable/Events'
import AddEvent from "./components/budgetTable/AddEvent"
import Balance from "./components/layout/Balance"
import Loading from './components/layout/Loading'

class App extends Component {

  state = {
    userid: this.props.userid,
    userData: "",
    events: [],
    total: 0,
    isLoading: false
  };

  componentDidMount() {
    // this.getUserId();
    this.getData();
  }

  db = firebaseApp.firestore();

  getData = () => {
    this.setState({ isLoading: true });
    // console.log(this.state.userid);
    this.db
      .collection("users").doc(this.state.userid).collection("events")
      .orderBy("dateTime", "desc")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({
          events: data
        });

        this.getUserData();
        this.getTotal();
        
      });
  };

  getUserData = () => {
    this.db
      .collection("users").doc(this.state.userid)
      .get()
      .then(doc => {
        if(doc.exists){
          this.setState({ userData: doc.data().name })
        }else{
          console.log("Empty Doc")
        }
      });

  }

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
    this.setState({ total: total, isLoading: false });
  };

  addEvent = (dateTime, title, amount, income) => {
    this.db
      .collection("users").doc(this.state.userid).collection("events")
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
    this.db
      .collection("users").doc(this.state.userid).collection("events")
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
    this.db
      .collection("users").doc(this.state.userid).collection("events")
      .where("id", "==", id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.db
            .collection("users").doc(this.state.userid).collection("events")
            .doc(`${doc.id}`)
            .delete()
            .then(function() {
              // console.log("Document successfully deleted!");
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

  clearAll = () => {
    this.db.collection("users").doc(this.state.userid).collection("events")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        // console.log(doc)

        this.db.collection("users").doc(this.state.userid).collection("events").doc(doc.id)
        .delete()
        .then(
          // console.log("Event Deleted")
        )
        .catch(error => {
          console.log(error)
        })

        this.getData();
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <Header userData={this.state.userData} />
        <AddEvent addEvent={this.addEvent} subEvent={this.subEvent} />

        {this.state.isLoading ? (
          <Loading />
        ) : (
          <div>
            <Balance total={this.state.total} />
            <Events events={this.state.events} removeEvent={this.removeEvent} clearAll={this.clearAll} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
