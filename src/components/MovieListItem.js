import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import { makeStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";

import { API_RESULT } from '../utils/constants';


const useStyles = makeStyles({
    imageCircle: {
        alignItems: 'center',
        width: '120%',
    },
    underlined: {
        marginTop: '2px',
        backgroundColor: '#e0e0e0',

        
        // borderTop: '2px solid #9e9e9e',
        // borderBottom: '2px solid #9e9e9e',
    }
})


const MovieListItem = ({ movie }) => {
    const { id, original_title, poster_path, title } = movie;
    const classes = useStyles();

    // const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`;
    const posterPath = `${API_RESULT}${poster_path}`;

    return (
        <>
            <ListItem className={classes.underlined} >
                <ListItemAvatar >
                    <Link to={`/pelicula/${id}`}>
                        <Avatar>
                            <img 
                                src={posterPath} 
                                className={classes.imageCircle} 
                                alt={title}
                            />
                        </Avatar>
                    </Link>
                </ListItemAvatar>

                <ListItemText
                    primary={original_title}
                />

                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="arrow" variant="contained" color="primary">
                        <Link to={`/pelicula/${id}`}>
                            <AddCircleSharpIcon color="primary" fontSize="large" />
                        </Link>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </>
    )
}

export default MovieListItem;
