import React from 'react';
import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import MovieListItem from './MovieListItem';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#9e9e9e',
        padding: '0.5rem 2rem',
        [theme.breakpoints.up("sm")]: {
            margin: '1rem 1rem',
        }
    },
    demo: {
        margin: '1rem 0 2rem 0',
    },
    title: {
        margin: '2rem 0 0 0',
        textAlign: 'center',
        backgroundColor: '#00796b',
        padding: '1rem',
    },
    underlined: {
        padding: '0rem',
    }
}));


const MovieList = ({ movies, listTitle }) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Typography variant="h6" className={classes.title}>
                    {listTitle}
                </Typography>
                <div className={classes.demo}>
                    <List className={classes.underlined}>
                        {
                            movies.map((movie) => (
                                <MovieListItem
                                    key={movie.id} 
                                    movie={movie} 
                                />
                            ))
                        }
                    </List>
                </div>
            </div>
        </>
    )
}

export default MovieList;