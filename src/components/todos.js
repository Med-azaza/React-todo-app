import React from 'react';
import Todo from './todo';


const Todos=(props)=>{
    return(
        <div className="todos">
            <ul className='todo-list'>
                {props.todos.map((item) =>(<Todo obj={item} todos={props.todos} setTodos={props.setTodos} key={item.id} content={item.text}/>))}
            </ul>
        </div>
    )
}
export default Todos;