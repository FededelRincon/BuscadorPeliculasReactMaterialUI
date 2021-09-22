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

import { Fab } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  logo: {
    marginRight: '50px',
    marginLeft: '20px',
  },
  menuButtons: {
    marginLeft:'5px',
    // backgroundColor:'#951546',
    padding: '12px',
    paddingLeft: '15px',
    textDecoration: 'none',
    color: '#000',
    "&:hover": {
        textDecoration: 'none',
        opacity:'1'
    }
  },
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
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
            <Logo className={classes.logo} />

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
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      {/* <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop> */}

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <ArrowUpwardIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}