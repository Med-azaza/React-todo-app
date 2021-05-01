import React,{useState,useEffect} from 'react';
import Todo from './todo';


const Todos=(props)=>{
    const [filter,setFilter]=useState('all');
    const [ftodos,setFtodos]=useState([]);
        useEffect(()=>{
               switch(filter){
            case 'completed':
                setFtodos(props.todos.filter((el)=> el.completed===true));
                break;
            case 'active':
                setFtodos(props.todos.filter((el)=> el.completed===false));
                break;
            case 'all':
                setFtodos(props.todos);
                break;
            default:
                break;
        }
    },[props.todos,filter])
    return(
        <div className="todos">
            <ul className='todo-list'>
                {ftodos.map((item) =>(<Todo obj={item} todos={props.todos} status={item.completed} setTodos={props.setTodos} key={item.id} content={item.text}/>))}
            </ul>
            <div className="footer">
                <div>items left</div>
                <div className='filters'>
                    <span onClick={()=>setFilter('all')} className={`${filter==='all' ? "selected":""}`}>All </span>
                    <span onClick={()=>setFilter('active')} className={`${filter==='active' ? "selected":""}`}>Active </span>
                    <span onClick={()=>setFilter('completed')} className={`${filter==='completed' ? "selected":""}`}>Completed</span>
                </div>
                <div>Clear Completed</div>
            </div>
        </div>
    )
}
export default Todos;