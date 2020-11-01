import React, { Component } from "react";
import axios from "axios";
import Resident from "./Resident";

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
        this.setState({
          content: res.data,
        });
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

          <div className="row mx-auto">
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
                  <h4>Terrain Type: {this.state.content.terrain}</h4>
                  <h4>
                    Population:
                    {this.state.content.population
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </h4>
                  <h4>Famous Residents :</h4>

                  {this.state.content.residents != null &&
                    this.state.content.residents.map((el, i) => (
                      <Resident link={el} key={i} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      
       
        
        <div className="text-center text-white mt-5 py-5">
       
       <div class="loading text-white">
 <span class="loading-dots text-white">•</span>
 <h3 class="loading-text text-white">Loading Planet</h3>
</div>
      </div>
    );
  }
}
