
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
// Material Kit 2 React examples
//
//<Card>
//<div>
 //<iframe
 //  title="Patrick M."
   //width="450"
  // height="315"
  // src={videoUrl}
  // frameBorder="0"
 //  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  // allowFullScreen
// ></iframe>
//</div>
//</Card>
//
//              image="https://i.ibb.co/XYMQd6L/Whats-App-Image-2023-11-19-at-13-28-17-removebg-preview.png" alt="Whats-App-Image-2023-11-19-at-13-28-17-removebg-preview"

import Promotional from "../../../../../src/view/Homepage/Promotional"
function Team() {
  const image = "https://i.ibb.co/FVckyHp/patrickrefined-removebg-preview.png"
  const videoUrl = "https://www.youtube.com/embed/QM2wkTnXUew";

 
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="white"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid>
  
       
        <div className="promotional-full-container">

         <div className="container">
        <Grid container spacing={10}>
        <Grid item xs={12} sm={6}>
      <Promotional pageHeaderBgImg="" pageHeaderMinVh="20vh" />
      
      <Typography variant="body2" color="green" opacity={0.8}>
        Connect with me
      </Typography>

      <Grid container spacing={3} sx={{ mb: 12 }}>
        <Grid item xs={3} md={4} lg={2}>
          <a href="https://www.linkedin.com/in/patrick-muthii-124a20194/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
        </Grid>
        <Grid item xs={3} md={4} lg={2}>
          <a href="https://twitter.com/Patrickskyman" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
        </Grid>
        <Grid item xs={3} md={4} lg={2}>
          <a href="https://github.com/Ochie123" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
        </Grid>
        <Grid item xs={3} md={4} lg={2}>
          <a href="https://www.youtube.com/channel/UC49Eo7T5Cf7bdQJ4uHPX6Xg" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon />
          </a>
        </Grid>
      </Grid>
    </Grid>
          <Grid item xs={12} sm={6}>
      
      <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>

            <CenteredBlogCard
              image="https://i.ibb.co/FVckyHp/patrickrefined-removebg-preview.png"
              title="Patrick M."
              description="''On the other hand, we cannot ignore efficiency.'' "
              component="img"
              src={image}
              loading="lazy"
              action={{
                type: "internal",
                route: "/about-us",
                color: "info",
                label: "message me",
              }}          
            />
      </MKBox>
      <MKBox p={3} mt={-1} textAlign="center">
        <MKTypography display="inline" variant="h5" textTransform="capitalize" fontWeight="regular">
        
        </MKTypography>
        <MKBox mt={1} mb={3}>
          <MKTypography variant="body2" component="p" color="text">
        
          </MKTypography>
        </MKBox>
    
      </MKBox>
      
          </Grid>
        </Grid>
        </div>
       
    </div>
  

        </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
