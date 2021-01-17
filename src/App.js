import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import StartPage from "./pages/startPage";
import IntroQuestions from "./pages/introQuestions";
import CareerPath from "./pages/careerPath";
import StemProvides from "./pages/stemProvides";
import Questions from "./pages/questions";
import ResultsPage from "./pages/resultsPage";
import AboutUs from "./pages/aboutUs";
import MissingScientistsForm from "./pages/missingScientist";

import BigQuestionsText from "./components/introText/bigQuestionsText";
import SmallQuestionsText from "./components/introText/smallQuestionsText";
import UrgentQuestionsText from "./components/introText/urgentQuestionsText";
import HumanQuestionsText from "./components/introText/humanQuestionsText";



const useStyles = makeStyles((theme) => ({
  particlesCanva: {
    position: "absolute",
  },
}));

const App = () => {
  const classes = useStyles();

  const [scientists, setScientists] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [scientistQuestions, setScientistQuestions] = useState([]);
  const [scientistPrograms, setScientistPrograms] = useState([]);

  const [selectedQuestion, setselectedQuestion] = useState(null);

  //PopUp
  const [open, setOpen] = useState(false);
  const [selectedScientist, setselectedScientist] = useState(null);

  // uniprograms
  const [selectedItem, setselectedItem] = useState(false);
  const [selectedPrograms, setselectedPrograms] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [selectedProgram, setselectedProgram] = useState(null);

 

  useEffect(() => {
    fetch("/scientists")
      .then((res) => res.json())
      .then((data) => setScientists(data))
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    fetch("/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    fetch("/uniprograms")
      .then((res) => res.json())
      .then((data) => setPrograms(data))
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    fetch("/questions/scientists")
      .then((res) => res.json())
      .then((data) => setScientistQuestions(data))
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    fetch("/scientists/programs")
      .then((res) => res.json())
      .then((data) => setScientistPrograms(data))
      .catch((error) => console.log(error.message));
  }, []);


  return (
    <div className="App">
      <Particles
        canvas
        className={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 600,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "star",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
          config_demo: {
            hide_card: false,
            background_color: "#b61924",
            background_image: "",
            background_position: "50% 50%",
            background_repeat: "no-repeat",
            background_size: "cover",
          },
        }}
      />
      <Grid container>
  {/* // direction="row"
  // justify="center"
  // alignItems="center"> */}
        
    
        <Switch>
          <Route path="/missingscientist" render={(props) => <MissingScientistsForm {...props} />} /> 

          <Route path="/aboutus" render={(props) => <AboutUs {...props} />} />

          <Route
            path="/careerpath"
            render={(props) => (
              <CareerPath
                setselectedProgram={setselectedProgram}
                selectedProgram={selectedProgram}
                scientistPrograms={scientistPrograms}
                selectedScientist={selectedScientist}
                setExpanded={setExpanded}
                expanded={expanded}
                setselectedItem={setselectedItem}
                selectedItem={selectedItem}
                {...props}
              />
            )}
          />
          <Route
            path="/resultspage"
            render={(props) => (
              <ResultsPage
                scientistQuestions={scientistQuestions}
                selectedQuestion={selectedQuestion}
                setOpen={setOpen}
                open={open}
                selectedScientist={selectedScientist}
                setselectedScientist={setselectedScientist}
                setselectedPrograms={setselectedPrograms}
                {...props}
              />
            )}
          />
          <Route
            path="/questions"
            render={(props) => (
              <Questions
                scientistQuestions={scientistQuestions}
                questions={questions}
                setselectedQuestion={setselectedQuestion}
                {...props}
              />
            )}
          />

          <Route
            path="/stemprovides"
            render={(props) => <StemProvides {...props} />}
          />

          <Route
            path="/humanquestions"
            render={(props) => (
              <IntroQuestions
                scientists={scientists}
                path="/stemprovides"
                returnpath="/urgentquestions"
                id="19"
                TextComponent={HumanQuestionsText}
                {...props}
              />
            )}
          />
          <Route
            path="/urgentquestions"
            render={(props) => (
              <IntroQuestions
                scientists={scientists}
                path="/humanquestions"
                returnpath="/smallquestions"
                id="47"
                TextComponent={UrgentQuestionsText}
                {...props}
              />
            )}
          />

          <Route
            path="/smallquestions"
            render={(props) => (
              <IntroQuestions
                scientists={scientists}
                path="/urgentquestions"
                returnpath="/bigquestions"
                id="10"
                TextComponent={SmallQuestionsText}
                {...props}
              />
            )}
          />

          <Route
            path="/bigquestions"
            render={(props) => (
              <IntroQuestions
                scientists={scientists}
                path="/smallquestions"
                returnpath="/"
                id="52"
                TextComponent={BigQuestionsText}
                {...props}
              />
            )}
          />

          <Route exact path="/" render={(props) => <StartPage {...props} />} />
        </Switch>
      </Grid>
    </div>
  );
};

export default App;
