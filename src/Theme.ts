import { createTheme } from '@mui/material/styles';

const styles = {
    goback: {
        position: 'fixed',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
        left: '10px',
        top: '10px'
    },
    iconPerfil: {
        float: 'right',
        right: '10px',
        position: 'fixed',
        padding: '10px',
        top: '10px',
    }
};

const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#f12b4c',
            contrastText: '#fff',
        },
        secondary: {
            main: '#FFC107',
            contrastText: '#fff',
        },
        error: {
            main: '#F44336',
            contrastText: '#fff',
        },
        text: {
            primary: '#333',
            secondary: '#555',
        },
        background: {
            default: '#0f1923',
            paper: '#0f1923',
        },
    },
});

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#64B5F6',
        },
        secondary: {
            main: '#FFA726',
        },
        error: {
            main: '#EF5350',
        },
        text: {
            primary: '#fff',
            secondary: '#BBDEFB',
        },
        background: {
            default: '#212121',
            paper: '#424242',
        },
    },
});

export { lightTheme, darkTheme, styles };