import React, { useState } from "react";
import Todolist from "./Todolist";

const App = () => {
  const [inputlist, setinputlist] = useState("");

  // ITEMS is an state array
  const [items, setitems] = useState([]);

  // called when any change occurs in input box
  // any new change in input box is saved in INPUTLIST through SETINPUTLIST
  const itemevent = (event) => {
    setinputlist(event.target.value);
  };

  // called when BUTTON is clicked
  // sending existing items and new items from INPUTLIST to ITEMS
  // making input box empty after saving values in ITEMS
  const listofitems = () => {
    setitems((olditems) => {
      return [...olditems, inputlist];
    });
    setinputlist("");
  };

  // this function is called when clicked on X,
  // function is called in TODOLIST component
  // when calling it recieves index of that array element from Todolist as ID
  // calling SETITEMS function = used to set values in ITEMS (array)
  // using FILTER in existing (currently saved) array values
  // save only those values in ITEMS (array) whose index are not matching with the index value recieved
  const deleteitem = (id) => {
    setitems((olditems) => {
      return olditems.filter((arrelm, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            value={inputlist}
            onChange={itemevent}
            placeholder="Add Items"
          />

          <button onClick={listofitems}> + </button>

          <ol>
            {/* using map function to call ITEMS (array) values one by one */}
            {/* INDEX has the index value of every array element  */}
            {/* ITEMVAL has all the values of ITEMS array  */}
            {/* sending index and ITEMVAL to ToDolist as an attribute */}
            {/* also sending a DELETEITEM function as an attibute */}
            {items.map((itemval, index) => {
              return (
                <Todolist
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteitem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
