import React from "react";
import ReactDOM from "react-dom";
import classNames from 'classnames';
//import TodoList from "./components/TodoList.jsx";
//import TodoItem from "./components/TodoAddItem.jsx";

class TodoList extends React.Component{

  render(){
    const listItem = this.props.items.map((item,index)=>{
      return (
        <TodoListItem
          key={index}
          index={index}
          item={item}
          editItem={this.props.editItem}
          removeItem={this.props.deleteItem}
        />
      )
    });

    return(
      <ul className="todo-list">
        {listItem}
      </ul>
    )
  }
}

//-------------------------------------------------------------

class TodoListItem extends React.Component{
  constructor(props) {
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }

  onClickDelete(){
    let index = parseInt(this.props.index);
    this.props.removeItem(index);
  }

  onClickDone(){
    console.log('done');
  }

  render(){
    let btnClass = classNames({
      'btn': true,
      'btn-pressed': false
    });

    // var editText;
    // if(this.state.isEdit){
    //   editText = <input type="text" onChange={this.onChangeText} defaultValue=/>
    // }else{
    //   editText = <span className="text">{this.props.item.text}</span>
    // };


    return(
      <li className={btnClass}>
        <input type="text" defaultValue={this.props.item.text} />
        <button onClick={this.onClickDone}>Done</button>
        <button onClick={this.onClickDelete}>Delete</button>
      </li>
    )
  }
}

//-------------------------------------------------------------

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

//-------------------------------------------------------------

class TodoApp extends React.Component{
  constructor(props) {
    super();
    this.state = {
      items:[]
    };
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }//constructor

  handleSubmit(e){
    e.preventDefault();
    let curItem = this.state.items.concat([{text:this.state.text, isDone:false}]);
    this.setState({items: curItem});
  }//handleSubmit

  handleChange(e){
    this.setState({text:e.target.value});
  }//handleChange

  handleDeleteItem(itemIndex){
    this.state.items.splice(itemIndex,1);
    this.setState({items: this.state.items});
  }//handleDelete

  render(){
    return(
      <div className="todo-container">
        <TodoAddItem
          items={this.state.items}
          ishandleSubmit={this.handleSubmit}
          ishandleChange={this.handleChange}
        />

        <TodoList
          items={this.state.items}
          deleteItem={this.handleDeleteItem}
          editItem={this.handleEditItem}
        />
      </div>
    )
  }//render
};

ReactDOM.render(
  <TodoApp />,document.querySelector("#app")
);
