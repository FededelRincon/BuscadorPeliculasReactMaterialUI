import React from 'react';
import {
    BrowserRouter as Router,
    // HashRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import Layout from '../components/Layout';

//Pages
import Home from '../pages/Home';
import Movie from '../pages/Movie';
import NewMovies from '../pages/NewMovies';
import PopularMovies from '../pages/PopularMovies';
import SearchComponent from '../pages/SearchComponent';


export const AppRouter = () => {


    return (
        <Router>
            <div>
                {/* <Layout /> */}
                <Layout />
                <Switch >
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/novedades" >
                        <NewMovies />
                    </Route>
                    <Route exact path="/populares">
                        <PopularMovies />
                    </Route>
                    <Route exact path="/buscar" >
                        <SearchComponent />
                    </Route>
                    <Route path="/pelicula/:id" >
                        <Movie />
                    </Route>

                    <Redirect to="/" />
                </Switch>
                {/* TODO: footer ?? */}
            </div>
        </Router>
    );
}