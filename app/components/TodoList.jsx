import React from "react";
import TodoListItem from "./TodoListItem.jsx";


class TodoList extends React.Component{
  constructor(props){
    super(props);
  }//contructor(props)

  render(){
    const items = this.props.items.map((item,index) => {
      return(
        <TodoListItem key={index} item={item} />
      )
    });

    return(
      <ul className="todo-list">
        {items}
      </ul>
    )
  }

}//TodoList
export default TodoList;