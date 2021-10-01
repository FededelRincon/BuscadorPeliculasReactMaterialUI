// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import { Button, Typography } from '@material-ui/core';


// function rand() {
//     return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//     // esto dejarlo fijo para q siempre salga en el mismo lugar
//     // const top = 50 + rand();
//     // const left = 50 + rand();
//     const top = 50;
//     const left = 50;

//     return {
//         top: `${top}%`,
//         left: `${left}%`,
//         transform: `translate(-${top}%, -${left}%)`,
//     };
// }

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         position: 'absolute',
//         width: 400,
//         backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
//     button: {
//         margin: '0 auto',
//     },
//     release_date: {
//         marginTop: '1rem',
//     }
// }));

// export default function SimpleModal({ title, imagenBackground, imagenFront, original_title, overview, release_date }) {
    
//     const classes = useStyles();
//     // getModalStyle is not a pure function, we roll the style only on the first render
//     const [modalStyle] = React.useState(getModalStyle);
//     const [open, setOpen] = React.useState(false);

//     const handleOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const body = (
//         <div style={modalStyle} className={classes.paper}>
//             <div id="simple-modal-description">
//                 <Typography gutterBottom variant="h4" id="simple-modal-title">
//                     {title} 
//                 </Typography>
                
//                 <Typography variant="body2" component="span" className={classes.description}>
//                     {overview}
//                 </Typography>
//                 <Typography variant="body1" component="span" className={classes.release_date}>
//                     {`\n`} Fecha de estreno: {release_date?.slice(0,4)}
//                 </Typography>
//             </div>
//         </div>
//     );

//       return (
//         <div className={classes.button} >
//             <Button 
//                 onClick={handleOpen}
//                 variant="contained" 
//                 color="primary"  
                
//                 href="#contained-buttons"
//                 size="large"
//                 component="div"
//             >
//                 Ver Mas
//             </Button>

//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="simple-modal-title"
//                 aria-describedby="simple-modal-description"
//             >
//                 {body}
//             </Modal>
//         </div>
//     );
// }



////////////////////////////////////////////////////////////////////////////////////////////////////////

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
        // maxWidth: '50%',
        // top: `50%`,
        // left: `50%`,
        // transform: `translate(0%, 0%)`,
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        borderRadius: '20px',
        boxShadow: theme.shadows[6],
        padding: theme.spacing(0, 0, 0),
        width: '400px',
    	height: '400px',
        zIndex: '45',
        
        // backgroundColor: '#951',
        // padding: theme.spacing(2, 4, 3),
        // overflow: 'inherit',
        // objectFit: 'cover',
        // position: 'absolute',
    },
    containerBig:{
        // width: '400px',
        // height: '400px',
        // position: 'absolute',
        // height: '100vh',
        // width: '100%',
        // maxWidth: '90%',
        // position: 'fixed',
        // top: '0',
        // bottom: '0',
        // left: '0',
        // right: '0',
        display: 'flex',
    },
    imgBackground:{
        // display: 'none',
        // position: 'relative',
        opacity: '35%',
        // position: 'fixed',
        position: 'absolute',
        zIndex: '-10',
        alignItems: 'center',
        // backgroundSize: 'contain',
        // maxWidth: '150%',
        // maxWidth: '100%',
        // margin: 'auto',
        // width: '90%',
        // maxHeight: '90%',
        // overflow: 'hidden',
        // textAlign: 'center',
        // padding: '2.5rem 1.5rem'
        maxWidth: '100%',
        minHeight: '100%',
        top: `11%`,
        left: `00%`,
        // maxWidth: '40%',
        // minHeight: '70%',
        // top: `15%`,
        // left: `30%`,
        // transform: `translate(-40%, -$60%)`,

        // objectFit: 'cover,',
        // maxHeight: '200%',
        // height: 'auto',
        // backgroundSize: 'cover',
        // overflow: 'hidden',
        // width: 400,
        // objectFit: 'cover',
    },
    button: {
        margin: '0 auto',
    },
    title: {
        textAlign: 'center',
    },
    containerButton: {
        margin: '0 auto',

    }
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
        <div className={classes.button}>
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
                        <div className={classes.containerBig}>
                            <div id="transition-modal-description">
                                <Typography gutterBottom variant="h4" className={classes.title} >
                                    {title} 
                                </Typography>
                    
                                <Typography variant="body2" component="span" className={classes.description}>
                                    {
                                        overview ? <p>{overview}</p> : ( <p>No hay descripcion disponible.</p>)
                                    }
                                </Typography>

                                <Typography variant="body1" component="span" className={classes.release_date}>
                                    Fecha de estreno: {release_date?.slice(0,4)}
                                </Typography>
                                <div className={classes.containerButton}>
                                    <Button 
                                        onClick={handleClose}
                                        variant="contained" 
                                        color="primary"  
                                        className={classes.modalButton}
                                        href="#contained-buttons"
                                        size="large"
                                        component="div"
                                    >
                                        Cerrar
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}