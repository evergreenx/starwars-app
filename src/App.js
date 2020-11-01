// // import React, { Component } from "react";
// // import logo from "./logo.svg";
// // import "./App.css";
// // import John from './john'
// // import AddPeople from './addPeople'

// // export default class App extends Component {
// //   state = {
// //     // name: "jjohn",
// //     // age: 20,

// //     peoples:[

// //      {surname:'dick' , age:30, food:"garri"  , id:1} ,
// //      {surname:'cick' , age:20, food:"garri n rice" , id:2} ,
// //      {surname:'csickss' , age:25, food:"garri sssn rice" , id:3} ,
// //      {surname:'ciasssck' , age:250, food:"garrssi n rice" , id:4}

// //     ]
// //   };

// //   addingPeople = (people)=>{

// //     people.id = Math.random()

// //     let peoples = [...this.state.peoples , people]
// //     this.setState({
// //       peoples:peoples
// //     })

// //     console.log(people)

// //   }

// //   // click =()=>{

// //   //   this.setState({
// //   //     name:'Mathew'
// //   //   })

// //   //   console.log(this.state)
// //   // }

// //   change = (e) => {
// //     this.setState({
// //       name: e.target.value,
// //     });
// //   };

// //   submit = (e) => {
// //     e.preventDefault();
// //   };
// //   render() {
// //     return (
// //       <div className="App">
// //         <header className="App-header">
// //           <img src={logo} className="App-logo" alt="logo" />

// //           {/* <p>{this.state.name}</p> */}

// //           {/* <form onSubmit={this.submit}>
// //             <input type="text" placeholder="texting" onChange={this.change} />
// //           </form>
// //           <button>Submit</button> */}

// //           <John peoples={this.state.peoples}  />
// //        <AddPeople addingPeople={this.addingPeople}></AddPeople>

// //         </header>
// //       </div>
// //     );
// //   }
// // }

// import React, { Component } from "react";

// // import Todos from "./Todos";
// // import AddTodo from "./addTodo";
// export default class App extends Component {
//   state = {
//     todos: [
//       { id:1, content: "go to church " },
//       { id:2, content: "go to zoo " },
//     ],
//   };

//   deleteTodo = (id) => {
//     console.log(id);
//     const todos = this.state.todos.filter((todo) => {
//       return todo.id !== id;
//     });

//     this.setState({
//       todos: todos,
//     });
//   };

//   addTodo = (todo)=> {
// todo.id = Math.random()
//     let todos = [...this.state.todos , todo];

//     this.setState({

//       todos
//     })

//     // console.log(todo , todo.id);
//     // console.log(this.state);

//   }
//   render() {
//     return (
//       <div className="container">
//         <h1 className="text-center text-danger"> Todos</h1>
//         <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}  />

//         <AddTodo addTodo={this.addTodo} />
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import Planets from "./component/Planets";

import "./bootstrap.min.css";
import "./App.css";


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>

          <Route exact path="/" component={HomePage} />

          <Route path="/planets/:id?" component={Planets} />
          <Route path="/planet" component={Planets} />
        </div>
      </BrowserRouter>
    );
  }
}
