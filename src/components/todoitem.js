import React from 'react';
import Check from './check';
import Remove from './remove';


const Todo=()=>{
    return(
        <div className='todo'>
            <Check/>
            <li className='todo-item'>item</li>
            <Remove/>
        </div>
    )
}
export default  Todo;