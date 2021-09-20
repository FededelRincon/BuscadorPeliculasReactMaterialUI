import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Container, Grid } from '@material-ui/core';

import MovieCardItem from '../components/MovieCardItem';
import PaginationComp from '../components/PaginationComp';
import { ReactComponent as Logo } from "../assets/Search.svg";
import SearchIcon from '@material-ui/icons/Search';
import { API_KEY, URL_API } from '../utils/constants';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    bigContainer: {
        margin: '0 auto 3rem auto',
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
    searchButton:{
        padding: '1rem',
        width: '100%'
    },
    noResults: {
        margin: '0 auto',
    }
}));


export default function SearchPage() {
    const classes = useStyles();
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [userWant, setUserWant] = useState('');

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const [noResults, setNoResults] = useState(false);

    const [page, setPage] = useState(1);
    const [pageTotal, setPageTotal] = useState(1);

    const handleInputChange = (e) => {
        setUserWant(e.target.value)

        if((e.target.value).length > 1) {
            setError(false)
        } else {
            setError(true)
        }
    }


    const handleFormChange = async (e) => {
        e.preventDefault();
        setMovies([]);
        setNoResults(false);

        if (userWant.trim().length > 1 ) {
            setLoading(true);
            setSearch(userWant);
        } else {
            setError(true)
        }
    }

    
    useEffect(() => {
        if (search === '') return
        
        const getSearch = async () => {

            try {
                // const url = `${URL_API}/search/movie?api_key=${API_KEY}&language=es-ES&query=${search}&page=1`
                const url = `${URL_API}/search/movie?api_key=${API_KEY}&language=es-ES&query=${search}&page=${page}`
                const response = await fetch(url);
                const result = await response.json();
        
                setPageTotal(result.total_pages);
                setMovies(result.results);
                setLoading(false);

                console.log(movies)
                console.log(page)
                console.log(pageTotal)

                
                if(movies.length !== 0) {
                    setNoResults(false);
                } else {
                    setNoResults(true);
                }

            } catch (error) {
                console.log(error);
                return null;
            }
        }
    
        getSearch();

    }, [search, noResults, page, pageTotal])

    return (
        <>
            <Grid container spacing={0} alignItems="center" className={classes.bigContainer}>
                <Grid item xs={5} sm={4} md={3} className={classes.smallContainer} >
                    <Logo className={classes.media} />

                    <form 
                        className={classes.root} 
                        noValidate autoComplete="off"
                        onSubmit={ handleFormChange }    
                    >
                
                        <TextField 
                            id="outlined-basic" 
                            label="Buscar pelicula..." 
                            variant="outlined" 
                            className={classes.textField}
                            value={userWant}
                            onChange={ handleInputChange }
                            error={error}
                            helperText={ error ? "Ingrese un busqueda mas larga." : null }
                        />
                        
                        <Button 
                            type="submit"
                            color= 'primary'
                            size='large' 
                            variant="contained" 
                            className={classes.searchButton}
                            endIcon={<SearchIcon />}
                            disabled={loading}
                        >
                            Buscar
                        </Button>

                    </form>

                </Grid>
            </Grid>

                {/* Skeleton para las imagenes q no cargan */}

            <Container >
                <Grid container spacing={2} alignItems="center">
                    {
                        movies.length === 0 ? null  : (

                        movies.map( (movie) => (
                            <Grid item xs={12} sm={6} md={3} key={movie.id} >
                                <MovieCardItem movie={movie} key={movie.id} />
                            </Grid>
                        ))
                        )
                    }

                    {
                        (noResults) ? (<p className={classes.noResults} >No hay resultados para mostrar</p>) : null
                    }
                </Grid>
            </Container>
                {
                    (movies.length === 0 || pageTotal === 1 ) ? null : (
                        <PaginationComp pageTotal={pageTotal} setPage={setPage} page={page} />
                    )
                }
        </>
    );
}