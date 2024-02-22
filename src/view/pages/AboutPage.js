import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { red } from "@mui/material/colors";
import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";

import {
  Card,
	CardContent,
	CardHeader,
  Grid
} from "@mui/material"
import Page from '../../../src/components/Page';
import Timer2 from 'view/Homepage/Timer2';

const ColorButton = styled(Button)(({ theme }) => ({
	color: theme.palette.getContrastText(red[500]),
	backgroundColor: red[500],
	"&:hover": {
		backgroundColor: red[700],
	},
}));


const AboutPage = () => {
  const currentDate = new Date();
 
	const [justEnded, setJustEnded] = useState(false);

	//const currentDate = new Date();

	const update = () => {
		setJustEnded(true);
	};


	// Set end time for the timer (replace with your desired end time)
	const endTime = new Date("2024-04-02T00:00:00");

  return (
    <Page title="Register successful">
         <Box
    minHeight="20vh"
    width="100%"
    sx={{
      backgroundColor: "black", // Set the background color to black
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "grid",
      placeItems: "center",
      m: 0,  // Set margin to zero
      p: 0,  // Set padding to zero
    }}
  >
      <Grid container item xs={10} lg={7} justifyContent="center" mx="auto">
  {currentDate < new Date(endTime) ? (
            
            <Typography variant="h3" color="Green" >
                <Timer2 endTime={endTime} update={update} />
              </Typography>
            
          ) : (
            <div
              style={{
                bottom: "-20px",
                left: "0",
                padding: "15px",
              }}
            >
              <Typography>Registration ended</Typography>
            </div>
          )}
          </Grid>
  </Box>

        <Container>
        <Box mt={5} mb={5} >

<Card>
<CardHeader
  title={<Typography variant="h5" style={{ fontWeight: "bold", textAlign: "center" }}>APPLICATION SUBMITTED</Typography>}
/>
        <CardContent>
          <Typography variant="body1" style={{ textAlign: "center" }} >
          Thank you for sending in your application for the upcoming BuildHealth24 Hackathon. We will review your application and get back to you as soon as possible. Please always check your email.
          </Typography>
          <br></br>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="https://rhipfactory.co.ke"// Change this to the actual URL of your homepage
            textAlign= "center"
       
          >
          
        <Typography><ColorButton>Return to Homepage</ColorButton></Typography>
		
            
          </Typography>
      </CardContent>

        </Card>
</Box>
        </Container>
  
    </Page>
  );
}

export default AboutPage;
