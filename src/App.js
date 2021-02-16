import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import List from './List.js';
import InputForm from './InputForm.js';
import React, { useState } from "react";




function App() {
  const [list, setList] = useState([]);
  console.log(list);
  function addItem(text) {
    const newList = [...list, text];
    setList(newList);
    console.log(list);
  }
  return (
    <div>
      <Card value={"hello"} />

      <InputForm handleSubmit={addItem} />
      <div>List:</div>
      <List />
    </div>
  );
}


export default App;
