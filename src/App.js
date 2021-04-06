import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [list, setList] = useState(["kot", "pies", "malpa"]);
  const [input, setInput] = useState("");

  const onRemoveHandler = (i) => {
    const newArray = [...list];
    newArray.splice(i, 1);
    setList(newArray);
  };

  const renderListItems = list.map((item, i) => (
    <li key={i} onClick={() => onRemoveHandler(i)}>
      {item}
    </li>
  ));

  const onClickHandler = () => {
    setList([...list, input]);
    // setList(["kot", "pies", "malpa", "zaba"])
    setInput("");
  };

  const onChange = (event) => {
    // console.log(event.target.value);
    setInput(event.target.value);
  };

  console.log(input);

  return (
    <div className="App">
      <h2>To-do-list</h2>
      <ul>{renderListItems}</ul>
      <input value={input} onChange={onChange} name="animal" />
      <button onClick={onClickHandler}>Add animal</button>
    </div>
  );
};

export default App;
