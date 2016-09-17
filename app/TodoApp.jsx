import React from "react";
import ReactDOM from "react-dom";
import TodoItem from "./components/TodoList.jsx";
//import TodoItem from "./components/TodoAddItem.jsx";

class TodoApp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      text: ''
    };
    //this.handleClick=this.handleClick.bind(this);
  }//constructor

  handleSubmit(e){
    e.preventDefault();
    var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
    var nextText = '';

    this.setState({items: nextItems, text: nextText});
  }//handleSubmit

  handleChange(e){
    this.setState({text:e.target.value});
  }//handleChange

  handleEdit(e){
    e.preventDefault();
    console.log('Edit Me');
  }//handleEdit

  handleDelete(e,item){
    this.setState({items:this.state.items});
    for(var i = 0; i < this.state.items; i++){
      console.log('run');
      this.state.items.splice(i,1);
    }

  }//handleDelete


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.handleChange.bind(this)} type="text"/>
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
        <TodoList />
      </div>
    )
  }//render
};

ReactDOM.render(
  <TodoApp />,document.querySelector("#app")
);
