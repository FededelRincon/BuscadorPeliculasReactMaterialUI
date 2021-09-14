import { ThemeProvider } from "@material-ui/styles";
import { AppRouter } from "./router/AppRouter";
import theme from './themeConfig';
// import './App.css';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <AppRouter />
            </ThemeProvider>
        </>
    );
}

export default App;
