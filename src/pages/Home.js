import React, { useEffect, useState } from 'react';
import { API_KEY, URL_API } from '../utils/constants';
import Carousel from '../components/Carousel';

export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const searchData = async () => {
            const url = `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`;
            const res = await fetch(url);
            const response = await res.json();
            setMovies(response);
        }
        searchData();        
    }, []);


    // const carrouselMovies = useFetch(
    //     `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`
    // )
    // const popularMovies = useFetch(
    //     // `${URL_API}/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`
    // );
    // const topRatedMovies = useFetch(
    //     // `${URL_API}/movie/top_rated?api_key=${API_KEY}&language=es-ES&page=1`
    // );
    return (
        <>
            <Carousel movies={movies} />

            <div>
                {/* <p>hola</p> */}
                <li>home: 1 carrousel arriba y 2 columnas con una lista en cada una</li>



                
            </div>
        </>
    )
}

export default Home;
