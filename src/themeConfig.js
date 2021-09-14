import { createTheme } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import teal from '@material-ui/core/colors/teal';
// import lightGreen from '@material-ui/core/colors/lightGreen';


const theme = createTheme({
    palette: {
        primary: {
            main: teal[700],
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
    }
});

export default theme;