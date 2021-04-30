import React from 'react';




const Todo=(props)=>{
    const check=(e)=>{
        e.target.classList.toggle('checked');
        props.setTodos(props.todos.map((el)=>{
            if (el.id===props.obj.id){
                return{...el, completed: !el.completed}
            }
            return el;
        }))
}
    const remove=(e)=>{
        props.setTodos(props.todos.filter((el)=> el.id!==props.obj.id));
}
    return(
        <div className='todo'>
            <div className="check">
                <div onClick={check} className="checkbtn"></div>
            </div>
            <li className='todo-item' key={props.unique}>{props.content}</li>
            <div className="rem">
                <div onClick={remove} className="rembtn"></div>
            </div>
        </div>
    )
}
export default  Todo;