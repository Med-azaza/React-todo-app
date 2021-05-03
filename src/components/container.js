import React,{useState,useEffect} from 'react';
import Header from "./header";
import Textfield from './textfield';
import Todos from './todos';

const Container=()=>{
    const [textinput,setTextinput]=useState('');
    const [todos,setTodos]=useState([]);
    const [ftodos,setFtodos]=useState([]);
    const save=()=>{
            localStorage.setItem('todos',JSON.stringify(todos))
    }
    const getlocal=()=>{
        if (localStorage.getItem('todos')=== null){
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let local=JSON.parse(localStorage.getItem('todos'));
            setTodos(local);
        }
    }
    useEffect(()=>{
        getlocal();
    },[])
    useEffect(()=>{
        save();
    },[todos]);
    return(
        <div className="container">
            <Header/>
            <Textfield setTextinput={setTextinput} textinput={textinput} setTodos={setTodos} todos={todos}/>
            <Todos ftodos={ftodos} setFtodos={setFtodos} todos={todos} setTodos={setTodos}/>
        </div>
    )
}
export default Container;