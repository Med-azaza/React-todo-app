import React,{useState,useEffect} from 'react';
import Todo from './todo';


const Todos=({todos ,setTodos,ftodos,setFtodos})=>{
    const [filter,setFilter]=useState('all');
    const [left,setLeft]=useState(0);
    useEffect(()=>{
        let count=0;
        todos.map((el)=> {
            if(el.completed===false){
                count++;
            }
            return el;
        });
        setLeft(count);
    },[todos])
        useEffect(()=>{
               switch(filter){
            case 'completed':
                setFtodos(todos.filter((el)=> el.completed===true));
                break;
            case 'active':
                setFtodos(todos.filter((el)=> el.completed===false));
                break;
            case 'all':
                setFtodos(todos);
                break;
            default:
                break;
        }
    },[todos,filter])
    const clear=()=>{
        setTodos(todos.filter((el)=>{
            return !(el.completed);
        }));
        setFtodos(ftodos.filter((el)=>{
            return !(el.completed);
        }));
    }
    return(
        <div className="todos">
            <ul className='todo-list'>
                {ftodos.map((item) =>(<Todo obj={item} todos={todos} status={item.completed} setTodos={setTodos} key={item.id} content={item.text}/>))}
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