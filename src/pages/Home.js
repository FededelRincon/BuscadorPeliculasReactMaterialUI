import React from 'react';
import Grid from '@material-ui/core/Grid';

import { API_KEY, URL_API } from '../utils/constants';
import Carousel from '../components/Carousel';
import useFetch from '../hooks/useFetch';
import MovieList from '../components/MovieList';

export const Home = () => {
    const carrouselMovies = useFetch(
        `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`
    );
    console.log(carrouselMovies)

    const popularMovies = useFetch(
        `${URL_API}/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`
    );

    // const topRatedMovies = useFetch(
    //     // `${URL_API}/movie/top_rated?api_key=${API_KEY}&language=es-ES&page=1`
    // );
    

    return (
        <>
            {(carrouselMovies.loading || carrouselMovies.result.success === false) ? <p>No hay informacion para mostrar</p> : (
                    <Carousel movies={carrouselMovies.result} />
            )}


            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Grid container justifyContent="center">
                        {( popularMovies.loading || popularMovies.result.success === false) ? <p>No hay informacion para mostrar</p> : (
                            <MovieList title="Titulo popular Movies" movies={popularMovies} />
                         )}
                    </Grid>
                </Grid>

                <Grid item xs={6}>
                    <Grid container justifyContent="center">
                        {/* sin probar esto... */}
                        {/* {( topRatedMovies.loading || topRatedMovies.result.success === false) ? <p>No hay informacion para mostrar</p> : (
                            <MovieList title="Titulo popular Movies" movies={topRatedMovies} />
                        )} */}
                        columna2 
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default Home;
