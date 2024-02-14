
// @mui material components
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
// Material Kit 2 React components
import Grid from "@mui/material/Grid";


import Page from '../../../src/components/Page'


// About Us page sections
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

const AboutPage = () => {


  return (
    <>
    <Page title="About - RhipFactory">
    <MKBox
  
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="green"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              About Us
            </MKTypography>
      
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
   
  
    
      </Card>
     
      </Page>
    </>
  );
}

export default AboutPage;
