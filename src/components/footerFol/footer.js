import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
    footerContainer: {
        background: "linear-gradient(45deg, #04053C 30%, #43156B 70%)",
        boxShadow: "0 3px 5px 2px",
        top: 'auto',
        bottom: 0,
        [theme.breakpoints.down("xs")]: {
            position: "relative",
            marginTop: 40,
            boxShadow: "0",
          },
    },

    iconsAnchor: {
        margin: '15px'
    },

    icons: {
        fontSize: '29px',
        fontWeight: '400px',
        color: 'white',
        '&:hover': {
            color: '#10ABB0',
        },
    },


    copyRightTypo: {
        color: 'white',
        textAlign: 'center',
        flexGrow: 1,
        marginLeft: '70px'
    }
}));
const Footer = () => {
const history = useHistory();

    const handleClick = (e) => {
        let path = window.open('https://www.linkedin.com/in/alejandra-ossa-jimenez/');
        history.push(path);
    
      };

      const handleGitClick =(e) => {
        let path = window.open('https://github.com/Aleja2911');
        history.push(path);
      }
   
        const classes = useStyles();

        return (
          <Grid container spacing={1} xs={12}>
            
         
            <AppBar className={classes.footerContainer} position="fixed" >
        
            
            <Toolbar >
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
            >
             <LinkedInIcon className={classes.icons}  onClick={handleClick} />
                        
                            
            <GitHubIcon className={classes.icons}  onClick={handleGitClick}/>
            </Grid>
            <Grid container
                direction="row"
                justify="flex-end"
                alignItems="center">

            <Typography variant='caption' className={classes.copyRightTypo}>©2020 Made with ❤️ by Alejandra Ossa Jimenez.</Typography>
            </Grid>
            </Toolbar>
           
            
            </AppBar>
                  
    </Grid>
        )
    }
 
export default Footer;


