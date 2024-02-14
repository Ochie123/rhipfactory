
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

// Images

import rhipfactory from "assets/images/logos/gray-logos/rhipfactory.png";

function Featuring() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        <Grid container spacing={3} sx={{ mb: 12 }}>
          <Grid item xs={6} md={3} lg={3}>
            <MKBox component="img" src={rhipfactory} alt="RHIPFactory" width="100%" opacity={0.8} />
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <MKBox></MKBox>
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
          <MKBox></MKBox>
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
          <MKBox></MKBox>
          </Grid>
            

    
    
        </Grid>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={1}
              separator=","
             
              title="Projects"
              description="Number of Projects to be completed."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={2}
              separator=","
              
              title="Days"
              description="Days developers will spend coding."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={5}
              title="Members"
              description="Team size per group."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
