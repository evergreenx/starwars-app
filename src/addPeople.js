// import React, { Component } from "react";



// export default class addPeople extends Component {

//   state = {
//     name: null,
//     age: null,
//     food: null,
//   };
//   handleChange=(event)=> {
//     this.setState({
//       [event.target.id]:event.target.value
//     })
//   }

//   handleSumbit = (e) => {
//     e.preventDefault();
   


//     this.props.addingPeople(this.state)

//     let form = document.getElementById('form')

//     form.reset()
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSumbit} id="form">
//           <label htmlFor="name">Name:</label>

//           <input type="text" id="name" onChange={this.handleChange} />

//           <label htmlFor="age">Age:</label>

//           <input type="text" id="age" onChange={this.handleChange} />

//           <label htmlFor="food">Food:</label>

//           <input type="text" id="food" onChange={this.handleChange} />

//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
