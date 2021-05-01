import React,{useState} from 'react';
import sun from '../img/icon-sun.svg';
import moon from '../img/icon-moon.svg';


const Header=()=>{
    let [dark,setDark]=useState(false);
    let [icon,setIcon]=useState(sun);
    const toggle=()=>{
        if(dark===false){
        document.getElementById('fullpage').setAttribute('class','bglight');
        setIcon(moon);
        setDark(true);
    } else {
        document.getElementById('fullpage').setAttribute('class','bgdark');
        setIcon(sun)
        setDark(false)
        }
    }
    return(
        <div className="header">
            <h1>T O D O</h1>
            <img src={icon} onClick={toggle} className='darkmodebtn' alt="darkmode toggle icon"/>
        </div>
    )
}
export default Header;