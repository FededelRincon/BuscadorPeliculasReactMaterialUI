import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


import { API_KEY, URL_API } from '../utils/constants';
import MovieCardItem from '../components/MovieCardItem';

const useStyles = makeStyles({
    title:{
        textAlign: 'center',
        margin: '15px 0 10px 0',
    },
});


const NewMovies = () => {
    const classes = useStyles();
    const [movieList, setMovieList] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const searchInfoApi = async () => {
            const url = `${URL_API}/movie/now_playing?api_key=${API_KEY}&lenguage=es-ES&page=${page}`
            const response = await fetch(url);
            const result = await response.json();
            setMovieList(result.results);
        }

        searchInfoApi();
    }, [page])

    // console.log(movieList)

    return (
        <>
            <Typography variant="h2" className={classes.title}>
                Nuevas peliculas
            </Typography>
            <Grid container spacing={0}>
                    {
                        movieList.map( (movie) => (
                                <Grid item md={4} sm={6} xs={12} key={movie.id}>
                                    <MovieCardItem movie={movie}  />
                                </Grid>
                        ))
                    }
            </Grid>

            <p>crear PaginationComp</p>
            <p>aca usar el setPage para cambiar las paginas</p>


        </>
    )
}

export default NewMovies;
