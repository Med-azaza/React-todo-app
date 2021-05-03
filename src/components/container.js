import React,{useState,useEffect} from 'react';
import Header from "./header";
import Textfield from './textfield';
import Todos from './todos';

const Container=()=>{
    const [textinput,setTextinput]=useState('');
    const [todos,setTodos]=useState([]);
    useEffect(()=>{
                if (localStorage.getItem('todos')=== null){
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let local=JSON.parse(localStorage.getItem('todos'));
            setTodos(local);
        }
    },[])
    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos]);
    return(
        <div className="container">
            <Header/>
            <Textfield setTextinput={setTextinput} textinput={textinput} setTodos={setTodos} todos={todos}/>
            <Todos todos={todos} setTodos={setTodos}/>
        </div>
    )
}
export default Container;