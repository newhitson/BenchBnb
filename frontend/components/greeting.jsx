import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class Greeting extends Component {

  render() {
    console.log(this.props);
    console.log("this log");
    const { currentUser } = this.props;

    return (
      currentUser ?
      <h1>welcome,</h1> :
      <section>
        <h1>signup</h1>
        <h2>signout</h2>
      </section>
    );
  }
}

export default Greeting;
