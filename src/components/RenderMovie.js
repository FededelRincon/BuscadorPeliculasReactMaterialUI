import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CardActions, CardMedia, Grid, Typography } from '@material-ui/core';

import { API_RESULT } from '../utils/constants';
import { Link, useHistory } from 'react-router-dom';


const useStyles = makeStyles( (theme) => ({
    button: {
        margin: '0 auto',
    },
    linkButton: {
        margin: '0 auto',
        textDecoration: 'none',
        "&:hover": {
            textDecoration: 'none',
            opacity:'1'
        },
    },
    imgBackground: {
        height: '120%',
        opacity: '60%',
        position: 'absolute',
        zIndex: '-1',
        backgroundSize: "cover",
        
        backgroundColor: '#66999',
        [theme.breakpoints.up("xs")]: {
            height: '200%',
        },
        [theme.breakpoints.up("sm")]: {
            height: '160%',
        },
        [theme.breakpoints.up("md")]: {
            height: '150%',
        },
        [theme.breakpoints.up("lg")]: {
            height: '120%',
        },
    },
    imgFront: {
        position: 'relative',
        height: '90%',
        margin: '3rem auto 0 auto',
        width: '55%',
        minWidth: '18rem',
        border: '5px solid #a7a7a7a7',
        [theme.breakpoints.up("xs")]: {
            left: '5%',
        },
        [theme.breakpoints.up("sm")]: {
            minWidth: '25rem',
        },
        [theme.breakpoints.up("md")]: {
            minWidth: '24rem',
            maxHeight: '35rem',
        },
        [theme.breakpoints.up("lg")]: {
            minWidth: '30rem',
            maxHeight: '45rem',
        },
        [theme.breakpoints.up("xl")]: {
            minWidth: '30rem',
            maxHeight: '50rem',
        },
    },
    title: {
        margin: '3rem 0 1rem 0',
        textAlign: 'center',
        backgroundColor: '#a7a7a7a7',
        borderRadius: '20px',
        padding: '1rem',
    },
    year: {
        color: '#e0e0e0'
    },
    description: {
        textAlign: 'center',
        alignItems: 'flex-end',
    },
    ul: {
        marginTop: '1rem',
    },
    fondoBlanco: {
        backgroundColor: '#a7a7a7a7',
        borderRadius: '20px',
        padding: '0.5rem',
    },
}));


const RenderMovie = ({ movieInfo }) => {
    const classes = useStyles();
    const { backdrop_path, poster_path, genres, id, title, original_title, overview, release_date, spoken_languages} = movieInfo;
    const history = useHistory();

    // const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`;
    const imagenFront = `${API_RESULT}${poster_path}`;
    const imagenBackground = `${API_RESULT}${backdrop_path}`;
    return (
        <>
            {
                imagenBackground ? (
                    <CardMedia
                    component="img"
                    sx={{
                        // 16:9
                        pt: '56.25%',
                    }}
                    image={ imagenBackground }
                    alt={title}
                    title={title}
                    className={classes.imgBackground}
                    />
                    ) : (
                        <Skeleton 
                        animation="wave"
                        variant="rect" 
                        />
                        )
            }

            <Grid container spacing={2}>
                <Grid item xs={11} md={6} >
                    {
                        imagenFront ? (
                            <CardMedia
                            component="img"
                            sx={{
                                // 16:9
                                pt: '56.25%',
                            }}
                            image={ imagenFront }
                            alt={title}
                            title={title}
                            className={classes.imgFront}
                            />
                        ) : (
                            <Skeleton 
                            animation="wave"
                            variant="rect" 
                            />
                        )
                    }
                </Grid>
                <Grid item md={1}></Grid> {/* this is to show the middle of the background picture */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h4" gutterBottom className={classes.title}>
                        {original_title}
                    </Typography>

                    <div className={classes.fondoBlanco}>
                        <Typography gutterBottom variant="h4">
                            Descripcion: 
                        </Typography>
                        
                        <Typography variant="body1" component="span" className={classes.description}>
                            {
                                overview ? <p>{overview}</p> : ( <p>No hay descripcion disponible.</p>)
                            }
                            Lanzamiento: {release_date.slice(0,4)} 
                        </Typography>
                            
                        <Typography variant="h5" className={classes.ul}>
                            Generos: 
                        </Typography>
                            <ul>
                                {
                                    genres.map( gen => (
                                        <li key={gen.id}>{gen.name}.</li>
                                    ))
                                }
                            </ul>
                        <Typography variant="h5" className={classes.ul}>
                            Idiomas disponibles:
                        </Typography>
                        <ul>
                            {
                                spoken_languages.map( (languaje, id )=> (
                                        <li key={id}>{languaje.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                <CardActions
                    className={classes.button}
                >
                    <Link to={`/pelicula/${id}`} className={classes.linkButton} >
                        <Button 
                            variant="contained" 
                            color="primary"  
                            href="#contained-buttons"
                            size="large"
                            component="div"
                            onClick={() => history.goBack()}
                        >
                            Volver
                        </Button>
                    </Link>
                </CardActions>
                </Grid>
                {/* <Grid item xs={1} md={1}></Grid> */}
            </Grid>
        </>
    )
}

export default RenderMovie;