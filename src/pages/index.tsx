import * as React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';

import Layout from '../components/Layout';
 
const IndexPage = () => {
  return (
    <Layout>
      <Container sx={{ paddingTop: 10, minHeight: '100vh' }}>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0} >

          </Grid>
        </Box>
        
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home</title>;