import React, { useState } from "react";

import {

  Grid,
  Typography,
  Box
} from "@mui/material"
import Timer2 from "../../../view/Homepage/Timer2";


const Header = ({ className, ...rest }) => {
  const currentDate = new Date();
 
	const [justEnded, setJustEnded] = useState(false);

	//const currentDate = new Date();

	const update = () => {
		setJustEnded(true);
	};


	// Set end time for the timer (replace with your desired end time)
	const endTime = new Date("2024-04-02T00:00:00");

  return (
 
     <>
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

      </>


  )
}



export default Header
