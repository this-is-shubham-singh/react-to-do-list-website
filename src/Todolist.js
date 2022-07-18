import React from "react";

// PROPS has all the array elements
// PROPS.ID has the current array element index
// call ONSELECT function (DELETEITEM) when clickd on any array element
// call and then send index of that array element to function ONSELECT (DELETEITEM )
// displaying array elements using LI 
const Todolist = (props) => {
  return (
    <>
      <div className="todo_style">
        <div
          className="fa fa-times"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          ✖
        </div>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default Todolist;
