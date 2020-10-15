import React from 'react';
import './App.css';
import Homepage from './Components/Home/Homepage';
import {BrowserRouter as Router} from 'react-router-dom';
import Navigate from './Components/Home/Navigate';
import Auth from './Components/Auth/Auth';

interface AppState {
  sessionToken: string,
  currentUser: User;
}
export interface User {
  username: string, 
  isAdmin: boolean
}

class App extends React.Component <{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      sessionToken: '',
      currentUser:{
        username: "admin",
        isAdmin: false,
      }
    };
    this.clearToken = this.clearToken.bind(this);
  }

  updateToken = (newToken: any) => {
    localStorage.setItem("token", newToken);
    this.setState({ sessionToken: newToken })
  };
  clearToken = () => {
    localStorage.clear();
    this.setState({sessionToken: ''});
    alert('Logged out :)')
  };

  setCurrentUser = (user: User) => {
    this.setState({ currentUser: user });
  };





  render() {
  return (
    <div className="App">
      {!this.state.sessionToken ? ( <Auth updateToken={this.updateToken} setCurrentUser={this.setCurrentUser} /> 
      ): (
        <Router>
          <Homepage
            clickLogout = {this.clearToken} token = {this.state.sessionToken}
          />
        </Router>
         )}      
    </div>
  );
}
}

export default App;
