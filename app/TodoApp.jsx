import React from "react";
import ReactDOM from "react-dom";
//import TodoList from "./components/TodoList.jsx";
//import TodoItem from "./components/TodoAddItem.jsx";


class TodoList extends React.Component{
  constructor(props) {
    super(props);
  }//constructor

  render(){
    var listItem = this.props.items.map((item,index)=>{
      return (
        <TodoListItem key={index} index={index} item={item} handleDelete={this.props.isHandleDelete} />
      )
    });

    return(
      <ul className="todo-list">
        {listItem}
      </ul>
    )
  }
}

class TodoListItem extends React.Component{
  constructor(props) {
    super(props);
  }//constructor

  onClickDelete(){
    //var index = parseInt(this.props.index)
    //this.props.handleDelete(index);
  }

  render(){
    return(
      <li>
        {this.props.item}
        <button onClick={this.onClickDelete}>Delete</button>
      </li>
    )
  }
}

class TodoAddItem extends React.Component{
  constructor(props) {
    super(props);
  }//constructor

  render(){
    return(
      <form onSubmit={this.props.ishandleSubmit}>
        <input onChange={this.props.ishandleChange} type="text"/>
        <button>{'Add #' + (this.props.items.length + 1)}</button>
      </form>
    )
  }
}



class TodoApp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      text: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }//constructor

  handleSubmit(e){
    e.preventDefault();
    var nextItems = this.state.items.concat([{item: this.state.text, index: Date.now()}]);
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

  handleDelete(e){
    console.log('delete');
    //this.setState({items:this.state.items});
    // for(var i = 0; i < this.state.items; i++){
    //   console.log('run');
    //   this.state.items.splice(i,1);
    // }

  }//handleDelete

  render(){
    return(
      <div className="todo-container">
        <TodoAddItem items={this.state.items} ishandleSubmit={this.handleSubmit} ishandleChange={this.handleChange}  />
        <TodoList key={this.state.items} items={this.state.items} isHandleDelete={this.handleDelete} />
      </div>
    )
  }//render
};

ReactDOM.render(
  <TodoApp />,document.querySelector("#app")
);
