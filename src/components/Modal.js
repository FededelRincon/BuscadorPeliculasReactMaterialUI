import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        // backgroundColor: theme.palette.background.paper,
        backgroundColor: '#9e9e9e',
        border: '2px solid #000',
        borderRadius: '20px',
        // boxShadow: theme.shadows[6],
        boxShadow: '0px 2px 15px 0px rgb(255 231 231 / 60%), 0px 6px 10px 0px rgb(187 187 187 / 14%), 0px 1px 18px 0px rgb(255 233 233 / 32%)',
        padding: theme.spacing(2, 1, 5),
        width: '400px',
        [theme.breakpoints.down("sm")]: {
            width: '350px',
        },
        zIndex: '45',
        position: 'relative',
        overflow: 'hidden',
    },
    containerImg:{
        position: 'absolute',
        width: '100%',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        height: '100%',
        zIndex: '-1',
        "&::before": {
            content: '""',
            position: 'absolute',
            right: '0',
            left: '0',
            top: '0',
            bottom: '0',
        }
    },
    imgBackground:{
        opacity: '30%',
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
    },
    containerText:{
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '20px',
        color: '#000',
        textShadow: '0px 0px 5px #fff',
    },
    title: {
        textAlign: 'center',
    },
    containerCloseButton:{
        right: '0',
        top: '0',
        bottom: '99%',
        left: '84%',
        [theme.breakpoints.down("sm")]: {
            left: '82%',
        },
        position: 'absolute',
        margin: '0rem',
        
    },
    closeButton: {
        fontSize: '2rem',
        color: '#333333',
        textShadow: '1px 1px 1px #000',
        borderRadius: '50%',
        padding: '0',
    },
    containerButton: {
        margin: '0 auto',
    },
}));

export default function SimpleModal({ title, imagenBackground, imagenFront, original_title, overview, release_date }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.containerButton}>
            <Button 
                onClick={handleOpen}
                variant="contained" 
                color="primary"  
                
                href="#contained-buttons"
                size="large"
                component="div"
            >
                Ver Mas
            </Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div className={classes.containerImg}>
                            {/* <img src={imagenBackground} alt={original_title} className={classes.imgBackground} /> */}
                            <img src={imagenFront} alt={original_title} className={classes.imgBackground} />
                        </div>
                        <div className={classes.containerCloseButton}>
                            <Button 
                                onClick={handleClose}
                                className={classes.closeButton}
                                component="div"
                                disableRipple={false}
                                disableFocusRipple={false}
                                disableElevation={false}
                            >
                                X
                            </Button>
                            {/* <button
                                onClick={handleClose}
                                className={classes.closeButton}
                            >
                                X
                            </button> */}
                        </div>
                        <div className={classes.containerText}>
                            <div id="transition-modal-description">
                                <Typography gutterBottom variant="h4" className={classes.title} >
                                    {title} 
                                </Typography>
                    
                                <Typography variant="body2" component="span">
                                    {
                                        overview ? <p>{overview}</p> : ( <p>No hay descripcion disponible.</p>)
                                    }
                                </Typography>

                                <Typography variant="body1" component="span">
                                    Año de estreno: {release_date?.slice(0,4)}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}