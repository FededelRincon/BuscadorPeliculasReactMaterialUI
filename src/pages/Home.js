import React from 'react';
import { Container, Grid } from '@material-ui/core';

import { API_KEY, URL_API } from '../utils/constants';
import Carousel from '../components/Carousel';
import useFetch from '../hooks/useFetch';
import MovieList from '../components/MovieList';
import CircularLoading from '../components/CircularLoading';
import Footer from '../components/Footer';


export const Home = () => {
    const carrouselMovies = useFetch(
        `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`
    );

    const popularMovies = useFetch(
        `${URL_API}/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`
    );

    const topRatedMovies = useFetch(
        `${URL_API}/movie/top_rated?api_key=${API_KEY}&language=es-ES&page=1`
    );
    

    return (
        <>
            {(carrouselMovies.loading || carrouselMovies.result.success === false) ? <CircularLoading /> : (
                    <Carousel movies={carrouselMovies.result} />
            )}

            {/* <Container 
                // disableGutters={true}
            > */}
                <Grid container spacing={0}>
                    <Grid item xs={12} lg={6}>
                        {/* <Grid container justifyContent="center"> */}
                            {( popularMovies.loading || popularMovies.result.success === false) 
                                ? ( <CircularLoading /> ) 
                                : ( <MovieList listTitle="Titulo popular Movies" movies={popularMovies.result.results} /> 
                            )}
                        {/* </Grid> */}
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        {/* <Grid container justifyContent="center"> */}
                            {( topRatedMovies.loading || topRatedMovies.result.success === false) 
                                ? ( <CircularLoading /> ) 
                                : ( <MovieList listTitle="Titulo mas votadas Movies" movies={topRatedMovies.result.results} /> 
                            )}
                        {/* </Grid> */}
                    </Grid>

                </Grid>
            {/* </Container> */}
            <Footer />
            
        </>
    )
}

export default Home;
