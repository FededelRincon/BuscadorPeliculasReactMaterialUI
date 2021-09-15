import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { API_RESULT } from '../utils/constants';
import { Link } from "react-router-dom";



const useStyles = makeStyles({
    root: {
        margin: '10px 10px',
        borderRadius: '20px',
    },
    media: {
        borderRadius: '10px',
        height: '550px',
    },
    cardContent: {
        backgroundColor: '#616161',
    },
    title: {
        borderRadius: '10px',
        backgroundColor: '#9e9e9e',
        textAlign: 'center',
        height: '70px',
    },
    button: {
        margin: '0 auto',
    },
  });


const MovieCardItem = ({movie}) => {
    const { poster_path, title, id } = movie;
    const classes = useStyles();

    const posterPath = `${API_RESULT}${poster_path}`;

    return (
        <>
            <Card className={classes.root} variant='outlined'>
                <CardContent className={classes.cardContent}>
                    <Link to={`/pelicula/${id}`}>
                        <CardMedia
                        className={classes.media}
                        image={posterPath}
                        title={title}
                        />
                    </Link>

                    <CardContent>
                        <CardActionArea>
                            <Typography variant="h6" component="h2" className={classes.title} >
                                {title}
                            </Typography>
                        </CardActionArea>
                    </CardContent>

                </CardContent>
            </Card>
        </>
    )
}


export default MovieCardItem;