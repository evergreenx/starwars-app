import React, { Component } from "react";

export default class addTodos extends Component {
  state = {
    inputedText: "",
  };

  handleChange = (e) => {
    this.setState({
      inputedText: e.target.value,
    });

  };
  handleSubmit=(e)=> {
    e.preventDefault();
    console.log(this.state);

  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="todos">Add todos</label>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Enter yout todo"
            id="todos"
            className="form-control"
          />
        </form>
      </div>
    );
  }
}
