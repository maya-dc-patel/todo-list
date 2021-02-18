import logo from './logo.svg';
import './App.css';
import MyCard from './Card.js';
import List from './List.js';
import InputForm from './InputForm.js';
import React, { useState } from "react";
import { render } from 'react-dom';




function App() {
  const [list, setList] = useState([]);
  console.log(list);


  function addItem(text) {
    const newList = [...list, text];
    setList(newList);
    console.log(list);
  }

  function move(event, index) {

    console.log(event);
  }
  return (
    <div>


      <InputForm handleSubmit={addItem} />
      <div>To-do:</div>
      <List list={list} onItemClick={move} />

      <div>Completed:</div>
      <List list={list} />
    </div>
  );
}



export default App;
