import React, { Component } from "react";
import axios from "axios";

export default class Planet extends Component {
  state = {
    planet: null,
    content: {},
    loading: false,
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
      })
      .finally(() => {
        this.setState({
          loading: true,
        });
      });
  }

  render() {
    return this.state.loading ? (
      <div>
        <div className="container mb-5 py-5">
          <a href="/" className="btn btn-primary mb-5">
            Back
          </a>

          <div className="row">
            <div className="col-lg-10">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">{this.state.content.name}</h1>
                  <h4 className="card-text">
                    Rotation Period: {this.state.content.rotation_period}
                  </h4>
                  <h4>Diameter : {this.state.content.diameter}</h4>

                  <h4>Climate : {this.state.content.climate}</h4>
                  <h4>Gravity : {this.state.content.gravity}</h4>

                  <h4>Terrain: {this.state.content.terrain}</h4>

                  <h4>Population: {this.state.content.population.toLocaleString()}</h4>

                  <h4>Residents :{this.state.content.residents}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>
        {" "}
        <h1 className="text-center py-5 mt-5">Loading</h1>
      </div>
    );
  }
}
