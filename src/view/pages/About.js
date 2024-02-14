// @mui material components
import Container from "@mui/material/Container";

import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

import Page from '../../components/Page'


const About = () => {


  return (
    <>
    <Page title="About - RhipFactory Kenya">
    <Box
        minHeight="75vh"
        width="100%"
        sx={{ 
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
          <Typography variant="h2" color="green" my={1}>
            About Assess
            </Typography>
          </Grid>
        </Container>
      </Box>


      </Page>
    </>
  );
}

export default About;
