import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
// import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import SimpleModal from './Modal';

import { API_RESULT } from '../utils/constants';
import './MovieCardItem.css';



const useStyles = makeStyles( (theme) => ({
    cardContent: {
        borderRadius: '15px',
    },
    titleContent: {
        borderRadius: ' 0 0 10px 10px',
        backgroundColor: '#9e9e9e',
        textAlign: 'center',

        maxHeight: '100px',

        minHeight: '100px',
    },
    title: {
        margin: '0 0',
        minHeight: '80px',
        padding: '10px',
    },
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
    }
}));


const MovieCardItemModal = ({movie}) => {
    const { backdrop_path, poster_path, title, original_title, overview, release_date} = movie;
    const imagenFront = `${API_RESULT}${poster_path}`;
    const imagenBackground = `${API_RESULT}${backdrop_path}`;

    const classes = useStyles();

    const posterPath = `${API_RESULT}${poster_path}`;

    return (
        <>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                variant='outlined'
                className={classes.cardContent}
            >
                {poster_path ? (
                    // <Link to={`/pelicula/${id}`} className={classes.linkButton} >
                    <CardMedia
                        component="img"
                        sx={{
                            // 16:9
                            pt: '56.25%',
                        }}
                        image={ posterPath }
                        alt={title}
                        title={title}
                    />
                    // </Link>
                ) : (
                    <Skeleton 
                        animation="wave"
                        variant="rect" 
                    />
                )}


                <CardContent sx={{ flexGrow: 1 }} className={classes.titleContent}>
                    <Typography variant="subtitle1" component="span" className={classes.title}>
                        {title}
                    </Typography>
                </CardContent>

                <CardActions>
                    <SimpleModal 
                        title={title}
                        imagenBackground={imagenBackground}
                        imagenFront={imagenFront}
                        original_title={original_title}
                        overview={overview}
                        release_date={release_date}
                    >
                        
                    </SimpleModal>
                </CardActions>
            </Card>

        </>
    )
}


export default MovieCardItemModal;