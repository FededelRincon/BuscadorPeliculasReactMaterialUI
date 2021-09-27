import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    containerBig: {
        display: 'flex',
        flexDirection: 'column'
    },
    containerSmall: {
        margin: '5rem auto 1rem auto',
        maxWidth: '2.5rem',
    },
    orientation: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: "center",
    },
    message: {
        margin: '0 auto 2rem auto',
        textAlign: 'center',
    }
})


const CircularLoading = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.containerBig}>
                <div className={classes.containerSmall}>
                    <CircularProgress className={classes.orientation} />
                </div>
                <Typography variant="body2" className={classes.message}>
                    Cargando... Espere por favor !
                </Typography>

            </div>
        </>
    )
}

export default CircularLoading;