import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Home extends Component {
  state = {
    planetsDetails: [],
    isLoading: false,
    offset: 0,
    data: [],
    perPage: 2,
    currentPage: 0,
  };

  receivedPlanetData() {
    axios
      .get("https://swapi.dev/api/planets")

      .then((res) => {
        const data = res.data.results;
        const slice = data.slice(
          this.state.offset,
          this.state.offset + this.state.perPage
        );
        const postData = slice.map((planet) =>
          planet ? (
            <React.Fragment key={planet.name}>
              <div className="col-lg-6" key={planet.name}>
                <div className="card mt-4">
                  <div className="card-body">
                    <Link to={`/${planet.url.match(/\/api\/(.*)/)[1]}`}>
                      <h5 className="card-title">{planet.name}</h5>
                    </Link>

                    <p className="card-text">Climate : {planet.climate}</p>

                    <p className="card-text">
                      {" "}
                      Population:{" "}
                      {planet.population
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <div>loading</div>
          )
        );

        this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),

          postData,
        });
      })
      .catch((error) => console.log("There was a problem!", error))
      .finally(() => {
        this.setState({
          isLoading: true,
        });
      });
  }

  componentDidMount() {
    this.receivedPlanetData();
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedPlanetData();
      }
    );
  };

  render() {
    return this.state.isLoading ? (
      <div className="container mt-5 py-5">
        <div className="row">{this.state.postData}</div>

        <ReactPaginate
          className="bg-white"
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
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
