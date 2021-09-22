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
        height: '100%',
        opacity: '60%',
        position: 'absolute',
        zIndex: '-1'
        
    },
    imgFront: {
        position: 'relative',
        height: '90%',
        size: '200px',
        // width: '95%',
        // left: '15%',
        // marginTop: '2rem',
        // margin: '1rem auto',
        margin: '4rem auto 0 auto',
    },
    title: {
        width: '36rem',
        margin: '1rem 0 1rem 0',
        textAlign: 'center',
        backgroundColor: '#00796b',
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
        // backgroundColor: '#951',
        marginTop: '1rem',
    },
    button: {
        margin: '0 auto',
    },
}));


const RenderMovie = ({ movieInfo }) => {
    const classes = useStyles();
    const { backdrop_path, poster_path, genres, homepage, id, title, original_title, overview, release_date, spoken_languages} = movieInfo;

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

            <Grid container spacing={0}>
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                    {imagenFront ? (
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
                    )}
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={5}>
                    <Typography variant="h4" gutterBottom className={classes.title}>
                        {original_title}
                    </Typography>

                    <Typography gutterBottom variant="h4">
                        Descripcion: 
                    </Typography>
                    
                    <Typography variant="body1" component="span" className={classes.description}>
                        {overview} Lanzamiento: {release_date.slice(0,4)}
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
                <Grid item xs={2}></Grid>


            </Grid>

                </>
            )
}

export default RenderMovie;