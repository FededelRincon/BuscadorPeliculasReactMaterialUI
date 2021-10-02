import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';
import { ReactComponent as Logo } from "../assets/TMDB2.svg";

import { Link } from "react-router-dom";

import { Grid, Fab } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 999
  },
  logo: {
    [theme.breakpoints.up("xs")]: {
      minWidth: '3rem',
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: '2rem',
    },
    [theme.breakpoints.up("xl")]: {
      marginRight: '2rem',
    },
    [theme.breakpoints.up("xxl")]: {
      minWidth: '20rem',
      minHeight: '4rem',
    },
  },
  menuButtons: {
    textDecoration: 'none',
    color: '#000',
    "&:hover": {
      textDecoration: 'none',
      opacity:'1'
    },
    [theme.breakpoints.up("xs")]: {
      fontSize: '0.6rem',
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: '1rem',
      padding: '1rem',
    },
    [theme.breakpoints.up("md")]: {
      margin: '0 1rem',
    },
    [theme.breakpoints.up("lg")]: {
      margin: '0 2rem',
    },
    [theme.breakpoints.up("xl")]: {
      margin: '0 5rem',
    },
    [theme.breakpoints.up("xxl")]: {
      fontSize: '1.3rem',
    },
  },
  topButton: {
    right: theme.spacing(2),
    // bottom: theme.spacing(6),
  }
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function LayoutTwo(props) {
    const classes = useStyles();


  return (
    <>
      <CssBaseline />
      <AppBar>
      <Grid container spacing={0}>
      <Grid item xs={12}>
      
        <Toolbar>
            <Link to="/" color="inherit" >
                <Logo className={classes.logo} />
            </Link>

            <Button>
                <Link to="/" color="inherit" className={classes.menuButtons} >
                    Home
                </Link>
            </Button>

            <Button>
                <Link to="/novedades" color="inherit" className={classes.menuButtons}>
                    Novedades
                </Link>
            </Button>

            <Button>
                <Link to="/populares" color="inherit" className={classes.menuButtons}>
                    Populares
                </Link>
            </Button>

           <Button>
                <Link to="/buscar" color="inherit" className={classes.menuButtons}>
                    Buscar
                </Link>
            </Button>

        </Toolbar>
        </Grid>
        </Grid>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top" className={classes.topButton}>
          <ArrowUpwardIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}