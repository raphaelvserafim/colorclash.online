import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import "../css/style.css"

import { lightTheme } from '../Theme';
import Header from './Header';

import SimpleBottomNavigation from './MenuFooter';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {

    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Header />
            {children}
            <SimpleBottomNavigation />
        </ThemeProvider>
    );
};


export default Layout;