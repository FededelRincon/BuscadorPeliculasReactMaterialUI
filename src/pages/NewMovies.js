import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { API_KEY, URL_API } from '../utils/constants';
import MovieCardItem from '../components/MovieCardItem';
import PaginationComp from '../components/PaginationComp';
import { Container, Grid } from '@material-ui/core';
import CircularProgress from "@material-ui/core/CircularProgress";


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
    const [pageTotal, setPageTotal] = useState(1);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const searchInfoApi = async () => {
            setLoading(true);
            try {
                const url = `${URL_API}/movie/now_playing?api_key=${API_KEY}&lenguage=es-ES&page=${page}`
                const response = await fetch(url);
                const result = await response.json();
                
                setMovieList(result.results);
                setPageTotal(result.total_pages);
                setLoading(false);
            } catch (error) {
                console.log(error);
                return null;
            }
        }
        
        searchInfoApi();
    }, [page, pageTotal])
    
    return (
        <>
            <Typography variant="h2" className={classes.title}>
                Nuevas peliculas
            </Typography>

            <Container >
                <Grid container spacing={2} alignItems="center">
                    {
                        loading 
                            ? (<CircularProgress /> ) : (
                                movieList.map( (movie) => (
                                    <Grid item xs={12} sm={6} md={3} key={movie.id} >
                                        <MovieCardItem movie={movie} key={movie.id} />
                                    </Grid>
                                ))
                            )
                    }
                </Grid>
            </Container>

            <PaginationComp pageTotal={pageTotal} setPage={setPage} page={page} />
        </>
    )
}

export default NewMovies;
