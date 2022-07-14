import React, { Component } from "react";
import Button from "../components/Button";
import Header from "../components/Header";

export default class Login extends Component {
  state = {
    counter: 0,
    email: "",
    password: "",
  };
  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.counter);
  };

  render() {
    return (
      <div className="w-full h-screen">
        <Header />
        <Button label="Increment" onClick={() => this.handleIncrement()} />
        <Button label="Reset" onClick={() => this.setState({ counter: 0 })} />
        <p>{this.state.counter}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:{" "}
            <input
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
          </label>
          <label>
            Password:{" "}
            <input
              value={this.state.password}
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
          </label>
          <Button label="Button" type="submit" />
        </form>
      </div>
    );
  }
}
