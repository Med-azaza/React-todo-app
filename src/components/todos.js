import React,{useState,useEffect} from 'react';
import Todo from './todo';


const Todos=(props)=>{
    const [filter,setFilter]=useState('all');
    const [left,setLeft]=useState(0);
    useEffect(()=>{
        let count=0;
        props.todos.map((el)=> {
            if(el.completed===false){
                count++;
            }
        });
        setLeft(count);
    },[props.todos])
        useEffect(()=>{
               switch(filter){
            case 'completed':
                props.setFtodos(props.todos.filter((el)=> el.completed===true));
                break;
            case 'active':
                props.setFtodos(props.todos.filter((el)=> el.completed===false));
                break;
            case 'all':
                props.setFtodos(props.todos);
                break;
            default:
                break;
        }
    },[props.todos,filter])
    const clear=()=>{
        props.setTodos(props.todos.filter((el)=>{
            return !(el.completed);
        }));
        props.setFtodos(props.ftodos.filter((el)=>{
            return !(el.completed);
        }));
    }
    return(
        <div className="todos">
            <ul className='todo-list'>
                {props.ftodos.map((item) =>(<Todo obj={item} todos={props.todos} status={item.completed} setTodos={props.setTodos} key={item.id} content={item.text}/>))}
            </ul>
            <div className="footer">
                <div className='itemsleft'>{left} items left</div>
                <div className='filters'>
                    <span onClick={()=>setFilter('all')} className={`${filter==='all' ? "selected":""}`}>All </span>
                    <span onClick={()=>setFilter('active')} className={`${filter==='active' ? "selected":""}`}>Active </span>
                    <span onClick={()=>setFilter('completed')} className={`${filter==='completed' ? "selected":""}`}>Completed</span>
                </div>
                <div> <span onClick={clear} className='clear'> Clear Completed</span></div>
            </div>
        </div>
    )
}
export default Todos;