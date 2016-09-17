import React from "react";
import TodoItem from "./components/TodoListItem.jsx";


class TodoItem extends React.Component{
  constructor(props){
    super(props);
  }//contructor(props)

  render(){
    return(
      <ul>{this.props.items.map(<TodoListItemitem items={} />)}</ul>

    )
  }
}//TodoList
export default TodoList;