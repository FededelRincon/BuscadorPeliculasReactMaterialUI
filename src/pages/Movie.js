import React from 'react';
import { useParams } from 'react-router';
import CircularProgress from "@material-ui/core/CircularProgress";

import useFetch from '../hooks/useFetch';
import { API_KEY, URL_API } from '../utils/constants'
import RenderMovie from '../components/RenderMovie';

const Movie = () => {
    const { id } = useParams();
    const movieInfo = useFetch(
        `${URL_API}/movie/${id}?api_key=${API_KEY}&language=es-ES`
    );

    if(movieInfo.loading || movieInfo.result.success === false) {
        return <CircularProgress />
        // TODO: poner el cargador al medio de todo y/o mas grande
    } else {
        return <RenderMovie movieInfo={movieInfo.result} />
    }
}

export default Movie;