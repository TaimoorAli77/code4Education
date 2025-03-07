import React, { Component } from "react";

export default class Unmount extends Component {
  componentDidMount() {
    this.intervalId = setInterval(() => {
      console.log("Tick");
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
    console.log("Tick Removed~!");
  }
  render() {
    return (
      <>
        <div>
          <h2>Child component will Unmount </h2>
        </div>
      </>
    );
  }
}
