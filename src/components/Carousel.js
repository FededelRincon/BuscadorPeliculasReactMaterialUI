import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Typography } from '@material-ui/core';
import { API_RESULT } from '../utils/constants';
import { makeStyles } from '@material-ui/styles';

import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    carousel: {
        [theme.breakpoints.down("md")]: {
            display: 'none',
        },
    },
    imagenBackground: {
        backgroundSize: 'cover',
        maxWidth: '100%',
        width: '100%',
        opacity: '60%'
    },
    imageFront:{
        border: '5px solid #a7a7a7a7',
        borderRadius: '15px',
        position: 'absolute',
        height: '350px',
        top: '8%',
        left: '18%',
    },
    container: {
        position: 'relative',
        height: '400px',
    },
    father: {
        display: 'flex',
        alignItems: 'flex-end',
        width: '50%',
        position: 'absolute',
        top: '50%',
        left: '65%',
        transform: 'translate(-50%, -50%)',
        fontSize: '15px',
    },
    son: {
        borderRadius: '25px',
        backgroundColor: '#a7a7a7a7',
        textAlign: 'center',
        padding: '20px',
        marginLeft: '2rem',
    },
    containerButton: {
        marginTop: '2rem',
    },
    button: {
        textDecoration:'none', 
        color: '#000',
    },
}));

export default function Carousell({ movies }) {
    const {results} = movies;
    const classes = useStyles();

    return (
        <Carousel
        className={classes.carousel}
        indicatorIconButtonProps={{
            style: {
                padding: '8px',
                color: '#00796b',
                display: 'none',
            }
        }}
            fullHeightHover={false}
            autoPlay='true'
            interval='3000'
            navButtonsAlwaysVisible='true'
            animation='fade'
            indicatorContainerProps={{
                style: {
                    marginTop: '0px',
                }
            }}
        >
            {results.map((movie) => (
                <Item key={movie.id} {...movie} />
                ))}
        </Carousel>
    );
}


const Item = ({ id, original_title, poster_path, backdrop_path, overview }) => {
    const imagenBackground = `${API_RESULT}${backdrop_path}`;
    const imagenFront = `${API_RESULT}${poster_path}`;

    const classes = useStyles();

    return (
        <Paper className={classes.container}>
            <img src={imagenBackground} className={classes.imagenBackground} alt={backdrop_path}/>

            <Link to={`/pelicula/${id}`} color="inherit" className={classes.button} >
                <img src={imagenFront} className={classes.imageFront} alt={poster_path}/>
                <div className={classes.father}>
                    <div className={classes.son}>
                        <Typography variant="h4" gutterBottom>
                            {original_title}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {overview}
                        </Typography>
                    
                        <div className={classes.containerButton}>
                            <Button size="large" color='primary' variant="contained">
                                {/* <Link to={`/pelicula/${id}`} color="inherit" className={classes.button} > */}
                                    Mas info...
                                {/* </Link> */}
                            </Button>
                        </div>
                    </div>
                </div>
            </Link>
        </Paper>
    );
};