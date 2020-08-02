import React from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import Header from './Header';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute",
        opacity: "0.5"
    }
})

const Home = () => {
    const classes = useStyles()
    return (
    <>        
        <Navbar/>
        <Header/>
        
    </>  
    );
};

export default Home;