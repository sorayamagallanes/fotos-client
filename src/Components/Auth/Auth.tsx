import React from "react";
import { Form, Label, Input } from "reactstrap";
import styled from 'styled-components';
import '../Auth/Auth.css';
import {TextField, Button} from '@material-ui/core';
import fotos from '../../Assets/fotos.png';

const StyledContainer = styled.form`
width: 100%,
height: 100%,

`




interface AuthProps {
  updateToken: Function;
  setCurrentUser: Function;

}

interface AuthState {
  username: string;

  password: string;
  login: boolean;
}

class Auth extends React.Component<AuthProps, AuthState> {
  constructor(props: AuthProps) {
    super(props);
    const initialState = {
      username: "",
    
      password: "",
      login: true,
    };
    this.state = initialState;
  }

  toggleLogin = (e: any) => {
    e.preventDefault();
    this.setState({ login: !this.state.login });
  };

  handleUsernameChange = (event: any) => {
    event.preventDefault();
    this.setState({ username: event.target.value });
  };



  handlePasswordChange = (event: any) => {
    event.preventDefault();
    this.setState({ password: event.target.value });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    const url: string = this.state.login
      ? `http://localhost:3000/user/login`
      : `http://localhost:3000/user/create`;

    const userPayload = {
      user: {
        username: this.state.username,
        password: this.state.password,
      },
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(userPayload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.props.updateToken(json.sessionToken);
        const newCurrentUser = {
      
          username: json.user.username,
          
        };
        this.props.setCurrentUser(newCurrentUser);
      });
  };

  render() {
    return (
      
      
      
     <StyledContainer>
    
      <div className="wrapper">
      
        <div className="form">
        <img id="fotosAuth" src={fotos}></img>
        <div className="formSection">
          <h2 className="bigLetters">
            {this.state.login
              ? "Login to "
              : "Sign Up for"}
          </h2>
          
          
          <Form onSubmit={this.handleSubmit}>
            <div className="username">
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                name="username"
                onChange={this.handleUsernameChange}
                value={this.state.username}
              />
            
            
            <div className="password">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                onChange={this.handlePasswordChange}
                value={this.state.password}
              />
            </div>
            <div className="submit">
              <Button variant="contained" color="secondary" type="submit" className="SubmitB">
                Submit
              </Button>
              <Button variant="contained" color="secondary" className="switch" onClick={this.toggleLogin}>
                {this.state.login ? "Sign Up" : "Login"}
              </Button>
            </div>
            </div>
            
          </Form>
          </div>
        </div>
      </div>
      
      </StyledContainer>
      
    
    );
  }
}

export default Auth;