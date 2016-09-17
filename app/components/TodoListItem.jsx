import React from "react";

class TodoItem extends React.Component{
  constructor(props){
    super(props);
  }//contructor(props)

  render(){
    return(
       <li>
        {item.text}
        <button onClick={this.onClickDelete}>Delete</button>
      </li>
    )
  }
}//TodoListItem


export default TodoListItem;