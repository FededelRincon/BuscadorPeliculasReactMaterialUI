import React from 'react';
import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import MovieListItem from './MovieListItem';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 752,
        backgroundColor: '#9e9e9e',
        margin: '1rem 5rem',
        padding: '0 2rem',
    },
    demo: {
        backgroundColor: '#e0e0e0',
        minWidth: '36rem',
        margin: '1rem 0 2rem 0',

        // width: '100%',
        // width: '30rem',
        // padding: '0 0 0 0',
        // alignItems: 'center',
        // textAlign: 'center',
        // border: '1px solid #000',
    },
    title: {
        border: '1px solid #000',
        width: '36rem',
        margin: '2rem 0 0 0',
        textAlign: 'center',
        backgroundColor: '#00796b',
        padding: '1rem',

        // borderBottom: '0',
        // minWidth: '36rem',
    },
    underlined: {
        padding: '0',
    }
});


const MovieList = ({ movies, listTitle }) => {
    const classes = useStyles();
    console.log(movies)

    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
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
                    </Grid>
                </Grid>
            </div>
          </>
    )
}

export default MovieList;