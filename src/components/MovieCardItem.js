import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { Card, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';


import { API_RESULT } from '../utils/constants';
import { Link } from "react-router-dom";



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


const MovieCardItem = ({movie}) => {
    const { poster_path, title, id } = movie;
    const classes = useStyles();

    const posterPath = `${API_RESULT}${poster_path}`;

    return (
        <>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                variant='outlined'
                className={classes.cardContent}
            >
                <CardMedia
                    component="img"
                    sx={{
                        // 16:9
                        pt: '56.25%',
                    }}
                    image={ posterPath }
                    alt={title}
                />
                {/* TODO: imagen random en assets, por si no llega la info ?? */}

                <CardContent sx={{ flexGrow: 1 }} className={classes.titleContent}>
                    <Typography variant="subtitle1" component="span" className={classes.title}>
                        {title}
                        {/* TODO: how fix if title is too long when collapse ?? */}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Link to={`/pelicula/${id}`} className={classes.linkButton} >
                        <Button 
                            variant="contained" 
                            color="primary"  
                            className={classes.button}
                            href="#contained-buttons"
                            size="large"
                            component="div"
                        >
                            Ver Mas...
                        </Button>
                    </Link>
                </CardActions>
            </Card>

        </>
    )
}


export default MovieCardItem;