import React from 'react';
import { API_KEY, URL_API } from '../utils/constants';
import Carousel from '../components/Carousel';
import useFetch from '../hooks/useFetch';

export const Home = () => {
    const carrouselMovies = useFetch(
        `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`
    );

    // const popularMovies = useFetch(
    //     // `${URL_API}/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`
    // );
    // const topRatedMovies = useFetch(
    //     // `${URL_API}/movie/top_rated?api_key=${API_KEY}&language=es-ES&page=1`
    // );
    
    return (
        <>
            {
                carrouselMovies.loading ? <p>cargando...</p> : (
                    <Carousel movies={carrouselMovies.result} />
                )
            }

            <div>
                <li>home: 1 carrousel arriba y 2 columnas con una lista en cada una</li>



                
            </div>
        </>
    )
}

export default Home;
