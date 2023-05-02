import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import PaymentsIcon from '@mui/icons-material/Payments';
import Container from '@mui/material/Container';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={1} sx={{ background: 'transparent' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PaymentsIcon htmlColor='#fff' />
            <span style={{ marginLeft: '0.5rem', fontWeight: 'bold', color: '#fff' }}>15.00</span>
          </Box>

          <Box>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
