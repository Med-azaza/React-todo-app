import React from 'react';

const Check =()=>{
    return(
        <div className="check">
            <div 
            onClick={()=> document.querySelector('.checkbtn').classList.toggle('checked')}
            className="checkbtn">
            </div>
        </div>
    )
}
export default Check;