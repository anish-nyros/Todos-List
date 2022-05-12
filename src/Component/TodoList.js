import React, { useState } from "react";

export const TodoList = (props) => {
  // console.log(props.key)
  // console.log(props.item)
  const [clicked, setClicked] = useState(false)

  const handleCheckbox = ()=>{
    setClicked(!clicked)
    console.log("inside handleCheckbox function ",props.item)
  }
  return (
    <>
    <div className="todo_style">
      <input type="checkbox" onClick={handleCheckbox}/>
    <li style={{ textDecoration: clicked ? "line-through" : "none"}}>{props.item}</li>
      <button className="btn" onClick={ ()=> props.delete(props.id)}> x</button>
    </div>
     
    </>
  );
};


// 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