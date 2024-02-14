
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
//Photo by <a href="https://unsplash.com/@nci?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">National Cancer Institute</a> on <a href="https://unsplash.com/photos/person-wearing-lavatory-gown-with-green-stethoscope-on-neck-using-phone-while-standing-L8tWZT4CcVQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
import national from "assets/images/logos/gray-logos/national.jpeg";

function Information() {
  //const image = "https://source.unsplash.com/afW1hht0NSs"
  return (
    <MKBox component="section" py={12}>
      <Container>
      <Typography
          variant="h2"
          color="green"
    
        >
          About BuildHealth24
        </Typography>
        <br></br>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={8}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={9}>
                <MKBox>
                  <DefaultInfoCard
                    title="Innovating for Health"
                    description="BuildHealth24, proudly initiated by RHIPFactory, stands at the forefront of healthcare innovation, aiming to address and conquer the pressing challenges within Sub-Saharan Africa’s health industry. This healthcare hackathon serves as a dynamic platform, bringing together bright minds, technology enthusiasts, and healthcare professionals to collaboratively engineer solutions that have the power to reshape the healthcare landscape across the region."
                  />
                </MKBox>
              </Grid>
   
              <Grid item xs={12} md={9}>
              <DefaultInfoCard
                    title="Building for Health"
                    description="The solutions forged within this event have the potential to transform challenges into opportunities, nurturing a healthcare ecosystem that is both responsive and sustainable."
                  />
              
              </Grid>
              <Grid item xs={12} md={6}>
       
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard

              image={national}
              title="BuildHealth24 Hackathon, Kenya"
              description="A Gathering of Bright Minds!"
              action={{
                type: "internal",
                route: "about-us",
                color: "info",
                label: "learn more",
              }}
              loading="lazy"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
