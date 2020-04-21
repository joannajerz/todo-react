import React from 'react';
import './App.css';
import Todolist from "./container/todo";
import Addtodo from "./container/addtodo";
import Footer from './container/footer'

function App() {
  return (
   <div>
     <Addtodo/>
     <Todolist/>
     <Footer/>
   </div>
  );
}

export default App;
