import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { API_KEY, URL_API } from '../utils/constants';
import MovieCardItem from '../components/MovieCardItem';
import PaginationComp from '../components/PaginationComp';
import { Container, Grid } from '@material-ui/core';
import CircularProgress from "@material-ui/core/CircularProgress";
import Footer from '../components/Footer';


const useStyles = makeStyles({
    title:{
        textAlign: 'center',
        margin: '15px 0 10px 0',
    },
    paginador:{
        alignItems: 'center',
        margin: '0 auto',
        width: '5rem',
        height: '5rem',
    },
    NoResult: {
        textAlign: 'center',
        margin: '1rem 1rem 25rem 1rem',
    },
});



const PopularMovies = () => {
    const classes = useStyles();
    const [movieList, setMovieList] = useState([]);
    const [page, setPage] = useState(1);
    const [pageTotal, setPageTotal] = useState(1)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        const searchInfoApi = async () => {
            setLoading(true);
            setError(false);
            try {
                const url = `${URL_API}/movie/asd/popular?api_key=${API_KEY}&lenguage=es-ES&page=${page}`
                const response = await fetch(url);
                const result = await response.json();
                
                if(result.success === false){
                    setError(true)
                }

                setMovieList(result.results);
                setPageTotal(result.total_pages);
                setLoading(false);
            } catch (error) {
                console.log(error)
                return null;
            }
        }
        
        searchInfoApi();
    }, [page, pageTotal])
    
    return (
        <>
            <Typography variant="h2" className={classes.title}>
                Peliculas mas populares
            </Typography>
            <Container >

            <Grid container spacing={2} alignItems="center">
                {
                    loading 
                        ? (
                            <div className={classes.paginador}>
                                <CircularProgress /> 
                            </div> 
                        ) : (
                            movieList?.map( (movie) => (
                                <Grid item xs={12} sm={6} md={3} key={movie.id} >
                                    <MovieCardItem movie={movie} key={movie.id} />
                                </Grid>
                            ))
                        )
                }
            </Grid>
            </Container>

            {
                (!loading && !error) && 
                    <PaginationComp pageTotal={pageTotal} setPage={setPage} page={page} />
            }
            {
                (error) && 
                    <p className={classes.NoResult}>No hay datos para mostrar</p>
            }
            <Footer />
        </>
    )
}

export default PopularMovies;
