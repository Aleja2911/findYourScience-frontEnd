import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./css/questions.css";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
// import ScientistCard from '../components/scientist'

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    margin: 2,
    width: 430,
    background: "none",
    "&:hover": {
      background: "#CD9C22",
    },
    [theme.breakpoints.down("xs")] : {
      width: "80%",
      height: "auto",
      padding: 0,
      marginRight: "0.5em"
      },
  },
  typography: {
     fontFamily: "Playfair Display",
     fontSize: '0.9rem',
  },
  questionsList: {
    [theme.breakpoints.down("xs")] : {
      width: "80%",
      height: "auto",
      padding: 0,
      marginRight: "0.5em"
      },
    
  },
  returnbutton: {
    margin: 50,
    color: "white",
  },
}));

const Questions = ({ questions, scientistQuestions, setselectedQuestion }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleClick = (question) => {
    setselectedQuestion(question.id);
    let path = `/resultspage`;
    history.push(path);
  };

  const handleReturn = (e) => {
    let path = `/stemprovides`;
    history.push(path);
    console.log("it works");
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center" className="questions" xs={12}>
      <Grid item xs={12} className={classes.returnbutton}>
        <h2> What Would You Like To Do Today? </h2>
      </Grid>

      {questions &&
        questions.map((question, index) => (
          <Grid  item xs={12} sm={12} key={index} className={classes.questionsList}>
            <Button
              color="primary"
              variant="outlined"
              className={classes.button}
              
              onClick={() => handleClick(question)}
            >
              <Typography  className={classes.typography}>
              {question.question_name}
              </Typography>
            </Button>
          </Grid>
        ))}

      <Button className={classes.returnbutton} onClick={handleReturn}>
        {" "}
        Return{" "}
      </Button>
    </Grid>
  );
};

export default Questions;
