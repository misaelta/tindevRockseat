import {BrowserRouter,Route} from 'react-router-dom'
import React from 'react'
import Main from './pages/Main'
import login from './pages/Login';

export default function Routes(){
    return (
    <BrowserRouter>
    <Route path="/"  exact component={login}/>
    <Route path="/dev/:id" component={Main}/>

    
    </BrowserRouter>
    );
}