import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

export default class Home extends Component {
  state = {
    planetsDetails: [],
    isLoading: false,
  };

  componentDidMount() {
    axios
      .get("https://swapi.dev/api/planets")
      .then((res) => {
        this.setState({
          planetsDetails: res.data.results,
        });
        console.log(res.data.results);
      })
      .finally(() => {
        this.setState({
          isLoading: true,
        });
      });
  }

  render() {
    const { planetsDetails } = this.state;

    const planetslist = planetsDetails.length ?(

      planetsDetails.map((planet) => {
        return (
  
  <div className="col-lg-3" key={planet.url} > 
          <div className="card mt-4" >
            <div className="card-body">
              <Link to={`/${planet.url.match(/\/api\/(.*)/)[1]}`}>
                <h5 className="card-title">{planet.name}</h5>
              </Link>
  
             
  
              <p className="card-text">Climate : {planet.climate}</p>
  
              <p className="card-text"> Population: {planet.population}</p>
            </div>
          </div>
          </div>
         
        );
      })
    )  : (
      <div className="container">

      <h2 className="text-center mt-5 py-5 text-white">

        Loading....
      </h2>


      </div>
    )
    return (
      <div className="container mt-5">
        {/* <ToolTip text="the current time"/> */}
        <h1 className="text-center">Star-Wars Planets</h1>

        <div className="row">
        
          {planetslist}
      </div>
      </div>
    );
  }
}
