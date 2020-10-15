import React from 'react';
import {FormGroup} from 'reactstrap';
import {Button} from '@material-ui/core';
// import {Image} from 'cloudinary-react';

export interface uploadState {
    title: string, 
    postData: any,
    caption: string, 
    image: any,
    author: string,
    sessionToken: any,
   
}

export default class Upload extends React.Component<any, uploadState> {
    state: uploadState;
    constructor(props: any){
    super(props);
    this.state ={
        title: '',
        postData: [],
        caption: '',
        image: [],
        author: 'author',
        sessionToken: '',
       
    
    };
    // this.toggle = this.toggle.bind(this);
    this.createUpload = this.createUpload.bind(this);
   
    // this.handleClick = this.handleClick.bind(this);
    
    // this.uploadPost = this.uploadPost.bind(this);
}

componentDidMount() {
    if (localStorage.getItem("token") === "undefined") {
      alert("You must be logged in to do this!");
    } else if (localStorage.getItem("token")) {
      this.setState({ sessionToken: localStorage.getItem("token") });
    }
  }


createUpload(event: any) {
    event.preventDefault();

    fetch('http://localhost:3000/upload/api/upload', {
        credentials: 'include',
        method: "POST", 
        body: JSON.stringify({
            upload:{
                title: this.state.title,
                caption: this.state.caption,
                image: this.state.image

            },

        }),
        headers: new Headers({
            Authorization: this.state.sessionToken,
            "Content-Type": "application/json",
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        this.setState({ postData: data.message});
        console.log(this.state.postData);
        console.log(this.state.sessionToken)
       
    })
}

render() {
    return(
        <div className="uploader">
            <h1>Upload</h1>
            
            <form onSubmit={this.createUpload}>
            <FormGroup classname="uploadForms">
                <input 
                id="fileInput"
                type="file"
                name= "image"
                value={this.state.image}
                onChange={(e) => this.setState({image: e.target.value})} />


                <input 
                onChange={(e) => this.setState ({title: e.target.value})}
                value={this.state.title}
                placeholder="Title"
                />
                <input 
                 onChange={(e) => this.setState ({caption: e.target.value})}
                 value={this.state.caption}
                 placeholder="caption" />
                <Button type="submit">Submit</Button>
    
                </FormGroup> 
            </form>
            
        </div>
    )
}

}