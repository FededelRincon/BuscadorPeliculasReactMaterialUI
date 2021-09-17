import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
    container: {
        margin: '30px auto',
        width: '33%',
    },
}));




const PaginationComp = ({ pageTotal, page, setPage }) => {
    const classes = useStyles();
    
    const paginatorButton = (e) => {
        setPage( parseInt(e.target.outerText) );
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.scrollTo({ behavior: 'smooth', block: 'center' });
    }
    
    useEffect(() => {
        
    }, [page])

    return (
        <>
            <div className={classes.container}>
                <div>
                    <Pagination 
                        key= {page}
                        count={pageTotal} 
                        defaultPage={page}
                        // boundaryCount={1}
                        siblingCount={1}
                        variant="outlined" 
                        color="primary" 
                        size="large" 
                        onClick= {paginatorButton}
                    />
                </div>
            </div>
        </>
    )
}

export default PaginationComp;