import React,{useState} from 'react';
import Header from "./header";
import Textfield from './textfield';
import Todos from './todos';

const Container=()=>{
    const [textinput,setTextinput]=useState('');
    const [todos,setTodos]=useState([]);
    return(
        <div className="container">
            <Header/>
            <Textfield setTextinput={setTextinput} textinput={textinput} setTodos={setTodos} todos={todos}/>
            <Todos todos={todos} setTodos={setTodos}/>
        </div>
    )
}
export default Container;