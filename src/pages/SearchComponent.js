import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Container, Grid } from '@material-ui/core';




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
        // backgroundColor: '#1234',
        margin: '0 auto',
        textAlign: 'center',
        justifyContent: 'center',
    },
    media: {
        width: '100%',
        height: '100%',
        margin: '1rem auto',
    },
    textField:{
        // margin: '0',
        // margin: '1rem 2rem',
        width: '100%'
    },
    searchButton:{
        padding: '1rem',
        width: '100%'
    }
}));


export default function SearchComponent() {
    const classes = useStyles();
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [userWant, setUserWant] = useState('');

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

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

        if (userWant.trim().length > 1 ) {
            console.log('esta OK, busca')
            setLoading(true)
            setSearch(userWant);
        } else {
            console.log('tirra errores y no busques')
            setError(true)
        }
    }

    
    useEffect(() => {
        if (search === '') return
        
        const getSearch = async () => {
            const url = `${URL_API}/search/movie?api_key=${API_KEY}&language=es-ES&query=${search}&page=1`
            // ver el page a ver si hace falta paginador o no...
            const response = await fetch(url);
            const result = await response.json();
    
            setMovies(result.results);
            setLoading(false)
        }
    
        getSearch(movies);

    }, [search])

    console.log(movies)

    return (
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
                        // onSubmit={handleFormChange} 
                        disabled={loading}
                    >
                        Buscar
                    </Button>

            {/* <CircularProgress /> */}
            {/* Skeleton en lugar de circularProgress */}


        {/* ver el useState del newMovies */}
            {/* <Container >
                <Grid container spacing={2} alignItems="center">
                    {
                        loading 
                            ? (<CircularProgress /> aca skeleton ) : (
                                movieList.map( (movie) => (
                                    <Grid item xs={12} sm={6} md={3} key={movie.id} >
                                        <MovieCardItem movie={movie} key={movie.id} />
                                    </Grid>
                                ))
                            )
                    }
                </Grid>
            </Container> */}

                </form>
            </Grid>
        </Grid>

    );
}