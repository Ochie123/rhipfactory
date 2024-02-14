// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";


import Page from "components/Page";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";




function Presentation() {
  return (
    <>
<Page title="Developers page- RhipFactory">
      <MKBox
    
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="Black"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              API Documentation {" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="green"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Built for developers. Explore our API.
              
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
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
     
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  We appreciate your support!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                Build For Better Health!
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      </Page>
    </>
  );
}

export default Presentation;
