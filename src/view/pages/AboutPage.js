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
          <Grid container item xs={10} lg={7} justifyContent="center" mx="auto">
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
        <br />
        <Typography variant="body1" gutterBottom>
          Welcome to RhipFactory! We have recorded your details! We'll notify you if selected and Good Luck.
        </Typography>
        <br></br>
        <Typography variant="h5" gutterBottom>
          Visit our homepage for more information: {' '}
          <a href="https://rhipfactory.co.ke" target="_blank" rel="noopener noreferrer">rhipfactory.co.ke</a>
        </Typography>
      </Container>
    </Page>
  );
}

export default AboutPage;
