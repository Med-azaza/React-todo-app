import React from 'react';
import Todo from './todoitem';


const Todos=()=>{
    return(
        <div className="todos">
            <ul className='todo-list'>
                <Todo/>
            </ul>
        </div>
    )
}
export default Todos;