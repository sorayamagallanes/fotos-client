import React from 'react';
import Navigate from './Navigate';
import {Button} from '@material-ui/core'
import {Link, Route, Switch} from 'react-router-dom';
import '../Home/Homepage.css';
import Greeting from './Greeting';





interface Homeprops {
    clickLogout: Function
}
class Homepage  extends React.Component <any> {

Logout(event: any) {
event.preventDefault();
this.props.clickLogout()
}

    render() {
      
        return(
            <div>
               
                <Navigate />
              
                
            
 <div> 
        <div className="navlink">
       
           <Button><Link to ="/home" onClick={(event) => this.Logout(event)}
            >LogOut</Link></Button>
            
            
        </div>  
        <div>
            <Switch>
                <Route exact path="/"></Route>
            </Switch>
        </div>
        </div>
        </div>
        )

    }
}

export default Homepage;