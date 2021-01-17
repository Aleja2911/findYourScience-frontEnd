import React, { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Pagination from "@material-ui/lab/Pagination";

import Footer from "../components/footerFol/footer";
import NavBar from '../components/navBarFol/navBar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  ul: {
    textAlign: "center",
    "& .MuiPaginationItem-root": {
      color: "#ffffff",
    },
  },
  button: {
    color: "purple",
    background: "none",
    "&:hover": {
      background: "#CD9C22",
    },
    marginLeft: 55,
  },
  header: {
    textAlign: "center",
  },
  resultsContainer: {
    marginLeft: "13em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  heading: {
    textAlign: "left",
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    marginLeft: 0,
    width: "5em",
  },
  secondaryHeading: {
    marginLeft: "auto",
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  accordion: {
    margin: 10,
  },
  text: {
    textAlign: "left",
  },
  pagination: {
    marginLeft: "35em",
    [theme.breakpoints.down("xs")]: {
        alignContent: "center",
        marginLeft: "5em",
        marginBotton: "10em"
      },
  }
}));

const CareerPath = ({
  scientistPrograms,
  selectedScientist,
  setExpanded,
  expanded,
}) => {
  const history = useHistory();
  const classes = useStyles();

  const handleProgramClick = (sp) => {
    let path = window.open(sp.program_site);
    history.push(path);
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [page, setPage] = useState(1);

  const filteredScientistPrograms =
    scientistPrograms &&
    scientistPrograms.filter(
      (sp) => sp.scientist_id === selectedScientist.scientist_id
    );

  const handlePagination = (programs) => {
    const slicedPrograms = programs.slice(
      page === 1 ? 0 : (page - 1) * 5,
      page === 1 ? 5 : (page - 1) * 5 + 5
    );
    return slicedPrograms;
  };

  return (
    <Grid style={{ width: "100%" }}>
      <NavBar />
      <div style={{ marginTop: "180px" }}>
        <Grid container xs={12}>
          <Grid item xs={12} sm={12}>
            <h2 className={classes.header}>
              These University Programs match {selectedScientist.first_name}{" "}
              {selectedScientist.last_name}'s career{" "}
            </h2>
          </Grid>
          <Grid item xs={12} sm={12} className={classes.resultsContainer}>
            {filteredScientistPrograms &&
              handlePagination(filteredScientistPrograms).map((sp, i) => {
                return (
                  <Fragment key={i}>
                    <Grid item xs={12} sm={10}>
                      <Accordion
                        expanded={expanded === i}
                        onChange={handleChange(i)}
                        className={classes.accordion}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography className={classes.heading}>
                            {sp.program_name}
                          </Typography>
                          <Typography className={classes.secondaryHeading}>
                            {sp.university_name}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography className={classes.text}>
                            <p> Duration: {sp.duration} </p>
                            <p>
                              {" "}
                              Location: {sp.city}, {sp.country}{" "}
                            </p>
                          </Typography>

                          <Button
                            className={classes.button}
                            onClick={() => {
                              handleProgramClick(sp);
                            }}
                          >
                            Visit Program Site
                          </Button>
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                  </Fragment>
                );
              })}
              </Grid>
            <Grid
            item
            xs={12}
            sm={12}
            >
              <Pagination
                classes={{ ul: classes.ul }}
                count={Math.floor(filteredScientistPrograms.length / 5)}
                color="primary"
                onChange={(e, p) => setPage(p)}
                className={classes.pagination}
              />
            </Grid>
          </Grid>
        
      </div>
      <Footer />
    </Grid>
  );
};

export default CareerPath;
