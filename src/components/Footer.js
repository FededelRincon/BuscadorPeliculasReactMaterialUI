import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: '#00796b',
        padding: '1rem',
        
        // minHeight: '11vh',
        // display: 'flex',
        // flexDirection: 'column'
        // marginTop: 'calc(90% - 60px)',
        // bottom: '0',

        // position: 'sticky',
        // position:'relative',
        // bottom:'0',
        // width:'100%',
        // height:'60px',   /* Height of the footer */
        // background:'#6cf',
    },
    footer: {
        textAlign: 'center',
    },
}))


const Footer = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.container}>
                <Typography variant="body2" className={classes.footer}>
                    Sitio creado por FDR. Todos los derechos reservados &copy;
                </Typography>
            </div>
        </>
    )
}

export default Footer;

// pegarlo abajo de todo......