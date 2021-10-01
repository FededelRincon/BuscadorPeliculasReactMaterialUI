import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Grid } from '@material-ui/core';
import queryString from "query-string";


import MovieCardItemModal from '../components/MovieCardItemModal';
// import MovieCardItem from '../components/MovieCardItem';
import PaginationComp from '../components/PaginationComp';
import { ReactComponent as Logo } from "../assets/Search.svg";
import { API_KEY, URL_API } from '../utils/constants';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    bigContainer: {
        margin: '1rem auto 3rem auto',
        textAlign: 'center',
        justifyContent: 'center',
    },
    media: {
        width: '100%',
        height: '100%',
        margin: '1rem auto',
    },
    textField:{
        width: '100%'
    },
    noResults: {
        margin: '0 auto',
    }
}));


export default function SearchPage() {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const [firstRender, setFirstRender] = useState(true);

    const [movieList, setMovieList] = useState([]);
    const [showMovieList, setShowMovieList] = useState(false);
    const [showNoResult, setShowNoResult] = useState(false)

    const [page, setPage] = useState(1);
    const [pageTotal, setPageTotal] = useState(1);
    const [showPagination, setShowPagination] = useState(false);
    

    const handleInputChange = (e) => {
        setFirstRender(false);
        if (e.target.value === ' ') {
            e.target.value = '';  //no dejo poner espacios en blanco
            return null
        }
        const urlParams = queryString.parse(location.search);//es el query en la barra de navegaacion
        urlParams.s = e.target.value; //query en el buscador
        if(e.target.value === '') {
            setShowPagination(false);
            setFirstRender(true)
            history.push(`/buscar`)    
            setShowMovieList(false);
        } else {
            history.push(`?${queryString.stringify(urlParams)}`);
            setShowMovieList(true);
            setShowPagination(true);
        }
    }
    
    
    useEffect(() => {
        if (firstRender) return null;

        const getSearch = async () => {
            const searchValue = queryString.parseUrl(location.search);
            const { s } = searchValue.query;
            if(s === undefined) return null;
                
            const response = await fetch(`${URL_API}/search/movie?api_key=${API_KEY}&language=es-ES&query=${s}&page=${page}` );
            const movies = await response.json();

            if (movies.results.length === 0) {
                setShowNoResult(true);
                setShowMovieList(false);
            } else {
                setShowNoResult(false);
                setPageTotal(movies.total_pages);
                setMovieList(movies.results);
            }
        }
       
        getSearch();
        // eslint-disable-next-line   
    }, [location.search, page])

    return (
        <>
            <Grid container spacing={0} alignItems="center" className={classes.bigContainer}>
                <Grid item xs={5} sm={4} md={3} className={classes.smallContainer} >
                    <Logo className={classes.media} />

                    <form 
                        className={classes.root} 
                        noValidate autoComplete="off"
                        onSubmit={ (e) => e.preventDefault() }
                    >
                
                        <TextField 
                            id="outlined-basic" 
                            label="Buscar pelicula..." 
                            variant="outlined" 
                            className={classes.textField}
                            onChange={ handleInputChange }
                        />
                       
                    </form>

                </Grid>
            </Grid>

            <Container >
                <Grid container spacing={2} alignItems="center">
                    {
                        (showMovieList || movieList.length===0 ) ? (
                            movieList.length === 0 ? null  : (
                                movieList.map( (movie) => (
                                    <Grid item xs={12} sm={6} md={3} key={movie.id} >
                                        <MovieCardItemModal movie={movie} key={movie.id} />
                                    </Grid>
                                ))
                            )
                        ) : (null)
                    }
                    {
                        showNoResult && <p className={classes.noResults}>No hay resultados para mostrar</p>
                    }
                </Grid>
            </Container>

            {
                (showPagination && pageTotal > 1 && !showNoResult ) && 
                    (
                        <PaginationComp pageTotal={pageTotal} setPage={setPage} page={page} />
                    )
            }
        </>
    );
}