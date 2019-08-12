import React,{useState} from 'react';
import logo from '../assets/logo.svg'
import './login.css'
import api from '../services/api'

export default function Login({history}){
    const [userName,setUsername] =useState('');

   async function handleSubmit(e){
        e.preventDefault();
        const response =await api.post('/devs',{
        userName,
        })
 
        const{_id} =response.data;
        history.push(`/dev/${_id}`)
    }

    return(
        <div className='login-conteiner'>
        
        <form onSubmit={handleSubmit}>
        <img src={logo} alt="TindDev"/>
        <input
        placeholder='digite o  nome do seu usuario no Github'
        value={userName}
        onChange={e=> setUsername(e.target.value)}
        
        />
        <button type='submit'>Enviar </button>
        </form>


        </div>
        

    )
   
}