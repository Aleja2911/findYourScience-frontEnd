import React from 'react';
import { useHistory } from "react-router-dom";
import './css/introQuestions.css';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import AnimatedCard from "../components/animatedCards/animatedCard";



const useStyles = makeStyles({
    root: {
     flexGrow: 1,
    },
    buttons:{
        padding: 30,
        color: "white",
    },
    text: {
        padding: 30,
        color: "white", 
    }
  });
  




const IntroQuestions = ({ scientists, path, TextComponent, id, returnpath }) => {
    const classes = useStyles();
    const history = useHistory();
  
    const handleClick=(path)=>{
      
        history.push(path)
        console.log("it works")
      }

      const handleReturn=(returnpath)=>{
        history.push(returnpath)
        console.log("it works")
      }
    return (  
        <Grid container className="bigQuestions">
          
            <Grid item xs={12} sm={6} md={3}>
                <Button className={classes.buttons} onClick={() => handleReturn(returnpath)}> Return </Button>
            </Grid>
             <Grid item spacing={1} sm={6} md={3} >
               
                <AnimatedCard scientists={scientists} id={id} />
            </Grid>
            <Grid item spacing={1} xs={12} sm={6} md={3} className={classes.text}>
                <TextComponent />
            </Grid>
          
           <Grid item xs={12} sm={6} md={3}>
              <Button className={classes.buttons} onClick={() => handleClick(path)}> Continue </Button>
          </Grid>
           
        </Grid>
    );
}
 
export default IntroQuestions;