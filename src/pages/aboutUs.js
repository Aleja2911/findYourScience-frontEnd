import React from 'react';
import Grid from "@material-ui/core/Grid";
import './css/aboutUs.css';

import NavBar from '../components/navBarFol/navBar';
import Footer from "../components/footerFol/footer";

const AboutUs = () => {

    return ( 
        <div>
        <NavBar/>

        <div style={{marginTop: '140px'}}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">

                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center" item xs={12}>
                <h3>
                About Us
                </h3>
                </Grid>

                <Grid container direction="row" justify="center" alignItems="center" style={{ padding: 55 }}>
                <p>
                Hi there!
                </p>
                <p>
                Thank you for visiting this site. My name is Alejandra. I am a Junior Web Developer with a background in social and political science strongly focused on gender studies.
                In 2020 I decided to take a leap of faith and jump at the opportunity of learning coding full time through 15 weeks of a very intensive 
                but rewarding Full Stack Web Development course at WBS School and it has been an incredible ride.

                I am the most excited about the limitless opportunities of combining, both, the creative world of coding and the work of increasing women participation and representation in the tech industry.
                For the last 3 weeks of my course I had the opportunity of flying solo by building a project of my own choice, which I decided I wanted it to counteract the lack of representation of women in STEM.
                In this site I hope to highlight the numerous women who are currently or have contributed to STEM fields and mostly invisibilised through history. As well as, provide some inspirations for other women who might be interested in following any of these career paths.
                This is a project that it is still developing as I hope to eventually make it into a public API. It is a small project but made with great passion, I hope you enjoy it.
                </p>
                </Grid>
            
            </Grid>
        </div>
        <Footer />
        </div>
        
     );
}

export default AboutUs;