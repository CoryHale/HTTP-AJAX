import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import FriendsList from './components/FriendsList';
import NewFriendForm from './components/NewFriendForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      errorMessage: "",
      friends: [],
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => {
        console.log(err);
        this.setState({ errorMessage: "error getting data" });
      });
  }

  submitHandler = newFriend => {
    axios.post("http://localhost:5000/friends", {...newFriend})
        .then(res => {
            // console.log(response);
            // console.log(response.data);
            this.setState({ friends: res.data })
        })
  }

  deleteHandler = id => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        // console.log(response);
        // console.log(response.data);
        this.setState({ friends: res.data })
      })
  }

  render() {
    return (
      <div className="App">
        {this.state.errorMessage && <h3>error: {this.state.errorMessage}</h3>}
        <FriendsList friends={this.state.friends} deleteHandler={this.deleteHandler} />
        <NewFriendForm submitHandler={this.submitHandler} />
      </div>
    );
  }
}

export default App;
