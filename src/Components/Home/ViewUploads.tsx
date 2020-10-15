import { Button } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Upload, {uploadState} from '../Home/Upload';

interface viewState {
    sessionToken: any,
    title: string,
    image: any,
    caption: string,
    author: string,
    uploads: uploadState[],
}



// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'space-around',
//       overflow: 'hidden',
//       backgroundColor: theme.palette.background.paper,
//     },
//     gridList: {
//       width: 500,
//       height: 450,
//     },
//     icon: {
//       color: 'rgba(255, 255, 255, 0.54)',
//     },
//   }),
// );

// watch react styling lesson to see where she tells us to put this. I dont remember
// https://material-ui.com/components/grid-list/
 class ViewUploads extends React.Component<any, viewState> {
    state: viewState;
    constructor(props: any) {
        super(props);
        this.state= {
            sessionToken: '',
            title: '',
            image: [],
            caption: '',
            author: '',
            uploads: [],
        };
        this.loadPosts = this.loadPosts.bind(this);
 
    }
    componentDidMount() {
        if (localStorage.getItem("token") === "undefined") {
          alert("Please log in first");
        } else if (localStorage.getItem("token")) {
          this.setState({ sessionToken: localStorage.getItem("token") });
        }
      }

      loadPosts() {
        if (localStorage.getItem('token') === 'undefined') {
            localStorage.clear();
            alert('Log in.')
          } else 
          if (localStorage.getItem('token')) {
            fetch('http://localhost:3000/upload/', {
                method: "GET",
                body: JSON.stringify ({
                    upload:{
                        title: this.state.title,
                        caption: this.state.caption,
                        image: this.state.image,
                        author: this.state.author
                    },
                }),
                headers: new Headers ({
                    Authorization: this.state.sessionToken,
                    "Content-Type": "application/json",
                }),
            })
            .then((res) => res.json())
            .then((json) => {
                this.setState({uploads: json});
                console.log(this.state.uploads)
            })
            .catch((err) => {
                console.error(err);
            });
          } else {
              localStorage.clear();
          }
      };

  
      
      render() {
        // const {classes } = this.props;
        

          return (
              
        //       <div className={classes.root}>
        //  <GridList cellHeight={180} className={classes.gridList}>
        // <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        //   <ListSubheader component="div">Umm</ListSubheader>
        // </GridListTile>
        // {this.state.uploads.map((upload) => (
        //     <GridListTile key={upload.image}>
        //         <img src={upload.image} alt={upload.title}  />
           
        //     <GridListTileBar
        //     title={upload.title}
        //     subtitle={upload.author}
        //     />
        //      </GridListTile>
        // ))}
        // </GridList>
                 
                
        // </div>
              <div>
                
                {/* <img src={this.state.image}</img> */}
                {this.state.uploads.map((upload) => (
               <div>
      {/* <img src={upload.image} alt={upload.title}  /> */}
      <Button onClick={upload.image}>Here</Button>
      <h1>heyy bestie {upload.sessionToken}</h1>
                  </div>
                ))}
              </div>
          )
        }
      }
      
    ;

    export default  ViewUploads;