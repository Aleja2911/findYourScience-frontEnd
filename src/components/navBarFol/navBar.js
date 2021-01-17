import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  bar: {
    color: "white",
    background: "linear-gradient(45deg, #04053C 30%, #43156B 70%)",
    boxShadow: "0 3px 5px 2px",
  },
  button: {
    width: 120,
    height: 90,
    margin: 2,
    paddingTop: 20,
    paddingBottom: 20,
    color: "white",
    background: "none",
    "&:hover": {
      background: "#CD9C22",
    },
    [theme.breakpoints.down("xs")] : {
      maxWidth: "2.5em",
      height: "3.5em",
      marginTop: "1em",
      padding: "none",
      },
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(-1),
  },
  returnResults: {
    color: "white",
    [theme.breakpoints.down("xs")] : {
      width: "100%",
      height: "3em",
      padding: "none",
      },
  },
  typography: {
    fontFamily: "Playfair Display",
    [theme.breakpoints.down("xs")] : {
      fontSize: "1.5em",
      },
    
  },
  typographyButton: {
    fontFamily: "Playfair Display",
    fontSize: 14,
    [theme.breakpoints.down("xs")] : {
      fontSize: "0.75em",
      }
  },
  
}));

const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();


  const handleReturn = (e) => {
    let path = `/questions`;
    history.push(path);
    console.log("it works");
  };

  const handleClick = (e) => {
    let path = `/aboutus`;
    history.push(path);
    console.log("it works");
  };

  const handleClickMissing = (e) => {
    let path = `/missingscientist`;
    history.push(path);
    console.log("it works");
  };
  const handleReturnResults = (e) => {
    let path = `/resultspage`;
    history.push(path);
    console.log("it works");
  };

  return (
    <AppBar className={classes.bar}>
      <Toolbar>
      <Grid container sm={12} >
        <Grid item xs={12} s={2} sm={2} >
          <Button
            className={classes.returnResults}
            onClick={handleReturnResults}
          >
            <Typography className={classes.typography} variant="h4">
              Find Your Science
            </Typography>
          </Button>
        </Grid>
        <Grid  container direction="row" justify="flex-end" alignItems="center" xs={12} s={10} sm={10} >
         <Grid xs={3} s={2} sm={2}>
          <Button variant="outlined" className={classes.button} onClick={handleReturn}>
           <Typography className={classes.typographyButton}>
            return to Questions
            </Typography>
          </Button>
          </Grid>
          <Grid xs={3} s={2} sm={2}>
            <Button
              className={classes.button}
              variant="outlined"
              onClick={handleClick}
            >
              <Typography className={classes.typographyButton}>
                About Us
              </Typography>
            </Button>
            </Grid>

            <Grid xs={3} s={2} sm={2}>
            <Button
              className={classes.button}
              variant="outlined"
            >
              <Typography className={classes.typographyButton}>
                Missing a Scientists?
              </Typography>
            </Button>
            </Grid>
            <Grid xs={3} s={2} sm={2}>
            <Button className={classes.button} variant="outlined">
              <Typography className={classes.typographyButton}>
                Missing a university program?
              </Typography>
            </Button>
          </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
