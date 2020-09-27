// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import John from './john'
// import AddPeople from './addPeople'

// export default class App extends Component {
//   state = {
//     // name: "jjohn",
//     // age: 20,

//     peoples:[

//      {surname:'dick' , age:30, food:"garri"  , id:1} ,
//      {surname:'cick' , age:20, food:"garri n rice" , id:2} ,
//      {surname:'csickss' , age:25, food:"garri sssn rice" , id:3} ,
//      {surname:'ciasssck' , age:250, food:"garrssi n rice" , id:4}

//     ]
//   };

//   addingPeople = (people)=>{

//     people.id = Math.random()

//     let peoples = [...this.state.peoples , people]
//     this.setState({
//       peoples:peoples
//     })

//     console.log(people)

//   }

//   // click =()=>{

//   //   this.setState({
//   //     name:'Mathew'
//   //   })

//   //   console.log(this.state)
//   // }

//   change = (e) => {
//     this.setState({
//       name: e.target.value,
//     });
//   };

//   submit = (e) => {
//     e.preventDefault();
//   };
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />

//           {/* <p>{this.state.name}</p> */}

//           {/* <form onSubmit={this.submit}>
//             <input type="text" placeholder="texting" onChange={this.change} />
//           </form>
//           <button>Submit</button> */}

//           <John peoples={this.state.peoples}  />
//        <AddPeople addingPeople={this.addingPeople}></AddPeople>

//         </header>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";

import "./bootstrap.min.css";

import Todos from "./Todos";
import AddTodo from './addTodo'
export default class App extends Component {
  state = {
    todos: [
      { id: Math.random(), content: "go to church " },
      { id: Math.random(), content: "go to zoo " },
    ],
  };

  deleteTodo =(id) =>{
    console.log(id)
const todos = this.state.todos.filter(todo =>{

  return todo.id !== id
})

this.setState({
  todos:todos
})

  }
  render() {
    return (
      <div>
        <h1 className="text-center text-danger"> Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
     
     <AddTodo/>
      </div>
    );
  }
}
