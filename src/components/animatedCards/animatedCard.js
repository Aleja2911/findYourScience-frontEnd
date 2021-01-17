import React from 'react';
import { useSpring, animated } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';


import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme =>({
    root: {
      maxWidth: 400,
    [theme.breakpoints.down("xs")] : {
    maxWidth: 50,
    marginTop: "2%",
    },
    height: 400,[theme.breakpoints.down("xs")] : {
      maxHeigth: 50
      },
  },
    button: {
      color: "white",
    },
    media: {
      height: 300,
      padding: 10,
    },
  }));



const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const AnimatedCard = ({ scientists, id }) => {
    const classes = useStyles();

  
    const [props, set] = useSpring(()=> ({xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 }}))
  
    return (

            <>
            <animated.div onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}>
                <Card className={classes.root}>
                    <img className={classes.media} src={scientists[id].picture} alt="scientist at work"/>
                    <h2> {scientists[id].first_name}  {scientists[id].last_name} </h2> 
                    <h3> {scientists[id].area_expertise} </h3>
                </Card>

                </animated.div>
            </>
            
    );
}
 


export default AnimatedCard; 