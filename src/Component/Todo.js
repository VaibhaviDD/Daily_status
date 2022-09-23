import React, { useState } from "react";
import "./todo.css";    

const Todo = () => {
  const [name, setName] = useState("");
  const [listData, setListData] = useState([]);
 
  const addTodo = (e) => {
    e.preventDefault();
    setListData((data) => {
      const addedList = [...data, name];
      console.log(data);
      console.log(addedList);
      
      return addedList;
    });
    setName("");
  };

  const removeAll=()=>{
    setListData([]);
  }
  const deleteItem = (index) => () =>
  setListData((listData) => listData.filter((_, i) => i !== index));
  return (
    <div className="container">
      <div>
        <input
          className=""
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span>
          <button className="btn btn-outline-success" onClick={addTodo}>
            Add
          </button>
        </span>
      </div>

      <div>
   {
          listData.map((list, index) => (
              <ul key={index}>
                <li className="name-list"
                onClick={deleteItem(index)}
                >{list}</li>
              </ul>
            ))}
          
      </div>
      <div>
        <button
          className="btn btn-outline-danger"
          onClick={ removeAll }
        >
          
          removeAll
        </button>
      </div>
    </div>
  );
};

export default Todo;
