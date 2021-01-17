import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase'

import NavBar from "../components/navBarFol/navBar";

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: "purple",
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
  
const MissingScientistsForm = () => {
    const classes = useStyles();
    const [field, setField] = useState(null);
    console.log(field)
    
    const handleChange = (event) => {
    setField(event.target.value);
    };

    return ( 
        <div>
        <NavBar />
        <FormControl className={classes.margin}>
            <InputLabel htmlFor="demo-customized-textbox"> First Name </InputLabel>
            <BootstrapInput id="demo-customized-textbox" />
        </FormControl>
        <FormControl className={classes.margin}>
            <InputLabel htmlFor="demo-customized-textbox"> Last Name </InputLabel>
            <BootstrapInput id="demo-customized-textbox" />
        </FormControl>

        <FormControl className={classes.margin}>
            <InputLabel htmlFor="demo-customized-textbox"> Area of Expertise </InputLabel>
            <BootstrapInput id="demo-customized-textbox" />
        </FormControl>
        <FormControl className={classes.margin}>
            <InputLabel htmlFor="demo-customized-textbox"> Wikipedia Link </InputLabel>
            <BootstrapInput id="demo-customized-textbox" />
        </FormControl>

        <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label"> Field </InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          placeholder="biology"
          value={field}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
            <MenuItem value="Chemistry">Chemistry</MenuItem>
            <MenuItem value="Biology">Biology</MenuItem>
            <MenuItem value="Physics">Physics</MenuItem>
            <MenuItem value="Astronomy"> Astronomy </MenuItem>
            <MenuItem value="Mathematics">Mathematics</MenuItem>
            <MenuItem value="Engineering">Engineering</MenuItem>
            <MenuItem value="Computer science">Computer science</MenuItem>
            <MenuItem value="Neurobiology">Neurobiology</MenuItem>
            <MenuItem value="Enviromental Science">Enviromental Science</MenuItem>
            <MenuItem value="Planetary">Planetary Science</MenuItem>
            <MenuItem value="Material Science">Materials Science</MenuItem>
            <MenuItem value="Medicine">Medicine</MenuItem>
        </Select>
      </FormControl>

        </div>
    );
}

export default MissingScientistsForm;