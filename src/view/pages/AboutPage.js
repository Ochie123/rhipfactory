import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Page from '../../../src/components/Page';

const AboutPage = () => {
  return (
    <Page title="Register successful">
      <Box>
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <Typography
              variant="h1"
              color="green"
           
            >
             Register Successful 👍
            </Typography>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="md">
      <br></br>

          <Typography variant="body1" gutterBottom>
            Welcome to RhipFactory! We have recorded your details! We'll notify you if selected and Good Luck.
          </Typography>

       
    
      </Container>
    </Page>
  );
}

export default AboutPage;
