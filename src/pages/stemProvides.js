import React from 'react';
import { useHistory } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
     button: {
       color: "white",
       margin: 50,
     },
     text: {
       padding: 30,
       margin: 50,
     }
});

const StemProvides = () => {
    const history = useHistory();
    const classes = useStyles();

    const handleClick=(e)=>{
        let path = `/questions`;
        history.push(path)
        console.log("it works")        
      }
    
    const handleReturn=(e)=>{
        let path = `/humanquestions`;
        history.push(path)
        console.log("it works")
      }
    return ( 
        <Grid direction="row"
        justify="center"
        alignItems="center">
        <div    style={{marginTop: '140px'}}>
          <Grid>
          <Button className={classes.button} onClick={handleReturn}> Return </Button>
          </Grid>
          <Grid className={classes.text}>
              <h3> 
                  Although women have been essential to
                  answer
                  questions that have, and are shaping, our civilization throughout history. 
                  They have also been notably snubbed by history books.
                  Get to know some 
                  of the women who have contributed to 
                  STEM fields, get inspired and Find Your Science

              </h3>
            </Grid>
            <Grid>
              <Button className={classes.button} onClick={handleClick}> Continue </Button>
            </Grid>
            </div>
        </Grid>
     );
}
 
export default StemProvides;