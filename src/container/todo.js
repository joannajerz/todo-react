import React from 'react';
import { connect} from "react-redux"

const todoList = (todos) =>{
    return(
        <div>
            {JSON.stringify(todos)}
        </div>
    )
};
const mapStateToProps=state=>({
    todos:state.todos
})
export default connect(mapStateToProps)(todoList);