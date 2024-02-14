
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// Material Kit 2 React components
import MKBox from "components/MKBox";

import MKInput from "components/MKInput";
import MKButton from "components/MKButton";


function Newsletter() {
  return (
    <MKBox component="section" pt={6} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item sx={12} md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <Typography color="green" variant="h4">Subscribe to our news</Typography>
            <Typography variant="body2" color="text" mb={3}>
              Be the first to receive our news.
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <MKInput type="email" label="Your Email..." fullWidth />
              </Grid>
              <Grid item xs={4}>
                <MKButton variant="gradient" color="info" sx={{ height: "100%" }}>
                  Subscribe
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src="https://source.unsplash.com/EgTbVYMQftU" alt="macbook" width="100%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
