import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Typography, Box} from "@material-ui/core";
import Navbar from "./Navbar";




const useStyles = makeStyles( theme => ({
    mainContainer: {
        background: "#efebe9",
        maxwidth: "5rem",
        opacity: "60%"
    },

    timeLineYear: {
        textAlign: "center",
        fontSize: "1rem",
        background: "#c5cae9",
        color: "#283593",
        lineHeight: 1,
    }
}));

const Resume = () => {
    const classes = useStyles();
    return( 
    <>
    <Navbar />
    <Box component="header" className={classes.mainContainer}>
        <Typography variant="h3" align = "center">
            Work Experience
        </Typography>
         <Box component ="div" className ={classes.timeLine}>
            <Typography variant="h3" className={classes.timeLineYear} align ="center" >
            <h1>2020</h1>
            <h2>Rutgers</h2>
            <h3>Full Stack Web Development Bootcamp</h3>
            </Typography>
            <Typography variant="h3" className={classes.timeLineYear} align ="center" >
                <h1>2019</h1>
                <h2>The Good Barbershop</h2>
                <h3>Barber</h3>
            </Typography>
            <Typography variant="h3" className={classes.timeLineYear} align ="center" >
                <h1>2009-2018</h1>
                <h2>Raffys Hair Studio</h2>
                <h3>Barber</h3>
            </Typography>
            <Typography variant="h3" className={classes.timeLineYear} align ="center" >
            </Typography>
        </Box>
    </Box>
    </>
    );
};

export default Resume;