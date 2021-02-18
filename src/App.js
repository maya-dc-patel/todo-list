import logo from './logo.svg';
import './App.css';
import MyCard from './Card.js';
import List from './List.js';
import InputForm from './InputForm.js';
import React, { useState } from "react";
import { render } from 'react-dom';
import { ListGroupItem, ListGroupItemText } from 'reactstrap';




function App() {
  const [list, setList] = useState([]);
  const [completedList, setList2] = useState([]);
  console.log(list);


  function addItem(text) {
    const newList = [...list, text];
    setList(newList);
    console.log(list);
  }

  function removeItem(index) {
    const newList = [];
    for (var i = 0; i < list.length; i++) {
      if (!(i === index)) {
        newList.push(list[i]);
      }
    }
    setList(newList);

    console.log(list);
  }
  function move(event, index) {
    console.log(event);
    const newList = [...completedList, list[index]];
    setList2(newList);
    removeItem(index);


  }
  return (
    <div>


      <InputForm handleSubmit={addItem} />
      <div>To-do:</div>
      <List list={list} onItemClick={move} />

      <div>Completed:</div>
      <List list={completedList} />
    </div>
  );
}



export default App;
