import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Button, Grid, Box} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";


const Contact = () => {
    return (
        <Box component="div">
             <Navbar />
            <Grid container justify="center">
                <Box component="form">
                    <Typography variant="h5" style={{color: "tomato", textAlign: "center", textTransform: "uppercase"}}> 
                    Contact Info                  
                    </Typography>
                    <Typography variant="h5" style={{color: "tomato", textAlign: "center" }}> 
                    email: willie.gomezjr12@gmail.com
                    </Typography>
                    <Typography variant="h5" style={{color: "tomato", textAlign: "center"}}> 
                    mobile: 551-223-8530
                    </Typography>
                    
                </Box>
            </Grid>
        </Box>
       
    )
};

export default Contact;