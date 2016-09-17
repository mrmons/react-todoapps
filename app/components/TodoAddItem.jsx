import React from "react";

class TodoItem extends React.Component{
  constructor(props){
    super(props);
  }//contructor(props)

  onClickDelete(){
    var index = parseInt(this.props.index);
    this.props.handleDelete(index);
    console.log('hello');
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input onChange={this.handleChange.bind(this)} type="text"/>
        <button>{'Add #' + (this.state.items.length + 1)}</button>
      </form>
    )
  }
}//TodoListItem


export default TodoListItem;