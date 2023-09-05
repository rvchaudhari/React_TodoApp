import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [array, setArray] = useState([]);


  const handlesubmit = (e) => {
    e.preventDefault();
    setArray([...array, todo]);
    setTodo("");
    console.log(array)
  };


  const handleDelete=(index)=>{
    const updateitems=[...array];
    updateitems.splice(index,1);
    setArray(updateitems);


  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Todo</h1>
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
            required
          />
          <button type="Submit">Add Todo</button>
        </form>
        <div>
          <ul>
            {array.map((e, index) => 
              <li key={index}>
                {e}
              <button onClick={()=>handleDelete(index)}>delete</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todo;

