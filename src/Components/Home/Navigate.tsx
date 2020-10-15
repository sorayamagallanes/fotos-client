import React from 'react';
import {BrowserRouter, Link, Route, Router, Switch} from 'react-router-dom';
import Upload from './Upload';
import Homepage from './Homepage';
import Gallery from './Gallery';
import { Button} from '@material-ui/core';
import styled from 'styled-components';
import fotos from '../../Assets/fotos.png';
import '../Home/Navigate.css'
import Greeting from './Greeting';


const StyledNav = styled.div`
border: 9px solid white;
height: 100px;
border-radius: 10px;
background-color: white;
`


export default class Navigate extends React.Component<any> {

    
    render () {
        return (
           <BrowserRouter>
           
           <StyledNav>
           <img id="fotos" src={fotos}></img>
            <div className = "navbar">
           
                <div className = "NBlist">
              
                    <Button ><Link to = "/">Home</Link></Button>
                    <Button ><Link to="/upload">Upload</Link></Button>
                    <Button><Link to="/gallery">Feed</Link></Button>
                 
                  
                    
                    
                    </div>
                    
            <div className = "routing">
                <Switch>
                    <Route exact path="/"><Greeting /></Route>
                    <Route exact path="/upload"><Upload /></Route>
                    <Route exact path="/gallery"><Gallery /></Route>
                   
                    
                </Switch>
                </div>
               </div>
               </StyledNav>
                </BrowserRouter>

             
            
        )
    }
}