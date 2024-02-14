
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Box} from "@mui/material";
import { Link } from "react-router-dom"
import Typography from '@mui/material/Typography';


import Card from '@mui/material/Card';


import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";



function Information() {
  return (
 
       <>
       <Container>
       <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <Typography variant="h2" color="red">Loved by </Typography>
          <Typography variant="h2" color="green" textGradient mb={2}>
            20000+ developers
          </Typography>
          <Typography variant="body1" color="text" mb={2}>
           500+ companies love
            our services.
          </Typography>
        </Grid>
   <Box
    sx={{
      display: 'flex',
      gap: 1,
      py: 1,
      overflow: 'auto',
      width: 'auto',
     
      margin: 1,
      scrollSnapType: 'x mandatory',
      '& > *': {
        scrollSnapAlign: 'center',
      },
      '::-webkit-scrollbar': { display: 'none' },
    }}
  >
  <Link to="">
    <Card variant="outlined" sx={{ width: 360 }}>
    <DefaultReviewCard
              name="Pat Fredrick"
              date="1 day ago"
              review="Moneysites has been instrumental in transforming our business operations through their exceptional enterprise software solutions. Their team demonstrated a deep understanding of our industry, and the software they developed streamlined our processes, resulting in increased efficiency and cost savings. The level of professionalism, technical expertise, and commitment to delivering high-quality solutions make Moneysites a reliable and valued partner."
              rating={5}
            />
  </Card>
  </Link>
  <Link to="">
  <Card variant="outlined" sx={{ width: 360 }}>
  <DefaultReviewCard
              name="Michael Jonathan"
              date="1 day ago"
              review="Working with Moneysites on our enterprise software project was a positive experience overall. They showcased a high level of technical proficiency and delivered a solution that met our specifications. The project management was effective, and they were responsive to our evolving needs. While there were occasional delays, the final software product exceeded our expectations. Moneysites proved to be a reliable partner for complex software development projects."
              rating={5}
            />
  </Card>
</Link>
<Link to="">
  <Card variant="outlined" sx={{ width: 360 }}>
  <DefaultReviewCard
              name="Anna"
              date="1 day ago"
              review="Moneysites has been a crucial collaborator in our journey towards digital transformation. Their enterprise software development team demonstrated a keen understanding of our business goals and challenges. The solutions they provided not only met but exceeded our expectations. The team's proactive communication, attention to detail, and commitment to delivering on time make Moneysites a valuable partner for any organization looking to elevate their digital capabilities"
              rating={5}
            />
  </Card>
</Link>
 
      
            </Box>
        
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="center">
        <Typography color="green">
        Become part of our success journey today.
        </Typography>
        </Grid>
        </Container>
        </>
  );
}

export default Information;
