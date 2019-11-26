import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './../App';
import About from './About';
import '../App.css';

class Router extends React.Component{

    render(){
        return(
    <BrowserRouter>
            <Switch>
            <Route path="/" component ={App} exact></Route>
            <Route path="/About" component = {About} exact></Route>
            </Switch>

    
    </BrowserRouter>
        );
    }
}

export default Router; 