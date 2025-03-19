import React, { PureComponent } from "react";

export default class Rpure extends PureComponent  {
  render() {
    console.log("Pure component Rendered!")
    return (
      <>
        <h1>Counter : {this.props.count}</h1>
        <button onClick={this.props.func}>Increment</button>
      </>
    );
  }
}
