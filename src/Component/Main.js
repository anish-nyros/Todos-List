import React, { useState } from "react";
import "./todo.css";
import { TodoList } from "./TodoList";

export const Main = () => {
  const [inputVal, setInputVal] = useState("");
  const [listArray, setListArray] = useState([]);
  const [clicked, setClicked] = useState(false)
  const handleChange = (event) => {
    console.log("inside handleChange :", event.target.value);
    setInputVal(event.target.value);
  };
  const onClickHandler = () => {
    setListArray((prevVal) => {
      return [...prevVal, inputVal];
    });
    setInputVal("");
  };
  const deleteList = (id) => {
    console.log("delete button is triggered");
    setListArray((olderList) => {
      return olderList.filter((elem, index) => {
        return index !== id;
      });
    });
  };
  const handleDelete = () => {
    console.log("remove all is triggered");
    setListArray([]);
  };
  // const handleCheckbox = (e) => {
  //   const { name, checked } = e.target;
  //   console.log("inside handleCheckbox ", name ," and it is ",checked)
    
  //   const tempList = listArray.map((list,index)=>{
  //       console.log("inside checkbox func ", checked)
  //      return index === name ? {
  //          ...list, isChecked : checked} : list
  //   })
  //   setListArray(tempList)
  // };

  const handleCheckbox = (e) => {
      setClicked(!clicked)
  }


  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDos List</h1>
        <br />
        <input
          type="text"
          placeholder="Add your Item"
          onChange={handleChange}
          value={inputVal}
        />
        <button onClick={onClickHandler}> + </button>
        <ol>
          {listArray.map((response, index) => {
            return <TodoList
            item = {response}
            key={index}
            id={index}
            delete = {deleteList}
            
            />

            // return (
            //   <div className="todo_style" key={index}>
            //     <input
            //       type="checkbox"
            //       name={index}
            //       onClick={handleCheckbox}
            //     />
            //     <li style={{ textDecoration: clicked ?"line-through" : "none"}} >{response}</li>
            //     <button className="btn" onClick={() => deleteList(index)}>
                 
            //       x
            //     </button>
            //   </div>
            // );
          })
          
          }
        </ol>
        <button className="remBtn" onClick={handleDelete}>
          {" "}
          Remove
        </button>
      </div>
    </div>
  );
};
