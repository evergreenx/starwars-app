import React, { Component } from "react";
import axios from "axios";

class Resident extends Component {
  state = {
    link: this.props.link,
    resident: {},
  };

  componentDidMount() {
    axios.get(this.state.link).then((res) => {
      

      this.setState({
          resident:res.data
      })

     
    }).catch(error => console.log("There was a problem!", error))
  }
  render() {
    return <div>



    <li>
    {this.state.resident.name}
    </li>


    </div>;
  }
}

export default Resident;
