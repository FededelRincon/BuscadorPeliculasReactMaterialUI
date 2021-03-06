import { createTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import teal from '@material-ui/core/colors/teal';


const theme = createTheme({
    palette: {
        primary: {
            main: teal[700],
            // main: '#00796b',
            // dark: teal[600],
            // light: red[300],
            // contrastText: '#64dd17'
        },
        secondary: {
            main: red[800],
            // dark: teal[600],
            // light: red[300],
            // contrastText: '#000'
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
            xxl: 1400,
        }
    }
});

export default theme;