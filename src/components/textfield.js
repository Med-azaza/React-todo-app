import React from 'react';



const Textfield= (props)=>{
    const takeinput=(e)=>{
        props.setTextinput(e.target.value);
    }
    const submit=(e)=>{
        props.setTodos([...props.todos,{text: props.textinput, completed: false, id: Math.random()*1000}]);
        props.setTextinput('');
    }
    const enter=(e)=>{
        if (e.keyCode===13){
            document.querySelector('.addbtn').click();
        }
    }
    return (
        <div className="text">
            <button  onClick={submit} className='addbtn'>ADD</button>
            <input value={props.textinput} onChange={takeinput} onKeyUp={enter} type="text"/>
        </div>
    )
}
export default Textfield;