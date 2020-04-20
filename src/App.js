import React from 'react';
import './App.css';
import Todolist from "./container/todo";
import Addtodo from "./container/addtodo";

function App() {
  return (
   <div>
     <Addtodo/>
     <Todolist/>
   </div>
  );
}

export default App;
