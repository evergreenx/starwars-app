import React, { Component } from "react";
import axios from "axios";

export default class Planet extends Component {
  state = {
    planet: null,
    content:{}
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    this.setState({
      planet: id,
     
    });

    axios
      .get(`https://swapi.dev/api/planets/${this.props.match.params.id}`)
      .then((res) => {
        console.log(res);

        this.setState({
          content: res.data,
        });
        console.log(res.data);
      });
  }

  render() {
    return (
      <div>
        <div className="container mt-5 py-5">
          <a href="/" className="btn btn-primary">
            Back
          </a>
          <h4>{this.state.content.name}</h4>
          <h4>{this.state.content.rotation_period}</h4>
          <h4>{this.state.content.diameter}</h4>
         
          <h4>{this.state.content.climate}</h4>
          <h4>{this.state.content.gravity}</h4>

          
          <h4>{this.state.content.terrain}</h4>

          <h4>{this.state.content.population}</h4>


          <h4>{this.state.content.residents}</h4>

          
        </div>
      </div>


    );
  }
}
