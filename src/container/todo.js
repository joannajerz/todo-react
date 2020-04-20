import React from 'react';
import { connect} from "react-redux"
import Todo from'../components/todo';
import {toggleTodo} from '../action/todo.actions';

const Todolist = ({todos, toggleTodo}) =>{
    return(
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} {...todo} onClick={()=> toggleTodo(todo.id)}/>
            ))}
        </ul>
    )
};
const mapStateToProps=state=>({
    todos:state.todos
})

const mapDispatchToProps = 
{toggleTodo};

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);