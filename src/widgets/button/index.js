import React from 'react';
import './button.css';

const Button =(props)=>{
    return <button ClassName ="btn" type={props.type || 'button'}>{props.title} </button>
}
export default Button;
