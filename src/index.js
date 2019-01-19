import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './app.css';

// components
import App from './components/App';
import Car from './components/car'; 

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={App}></Route>
            <Route path='/car/:id' component={Car}></Route>
        </div>
    </BrowserRouter>
, document.getElementById('root'));