import react from 'react';
import './App.css'
import { useState } from 'react';
export const App=(props)=>{
    const[name,setName]=useState('');
    return(
        <>
        <h2>Hey!!! Greeting</h2>
        <form className='greeting' onSubmit={setter}>
            <input 
        </form>
        </>
    )
}