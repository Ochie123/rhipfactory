import React from 'react';
import Grid from "@mui/material/Grid";
import { Box } from "@mui/joy";
import { Typography } from "@mui/material"

function Footers(){
    const year = new Date().getFullYear();

    return (
        <Box
            minHeight="20vh"
            width="100%"
            sx={{
                backgroundColor: "maroon", // Set the background color to maroon
                color: "white", // Set text color to white
                position: "static", // Set the position to fixed
                bottom: 0, // Align the footer to the bottom of the viewport
                left: 0, // Align the footer to the left of the viewport
                width: "100%", // Set width to 100% to cover the entire viewport width
                zIndex: 1000, // Set a high z-index to ensure the footer appears on top of other content
                display: "grid",
                placeItems: "center",
                m: 0,  // Set margin to zero
                p: 6,  // Set padding to zero
            }}
        >
            <Grid container justifyContent="center">
                <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
                    <Typography variant="body2">
                        <div className="row justify-content-center">
                            <img
                                src="/images/rhipfactory.jpeg"
                                alt="Promotional"
                                style={{
                                    width: "100%", // Change width to 100% for responsiveness
                                    border: "0",
                                    height: "auto", // Allow the height to adjust accordingly
                                    maxWidth: "200px", // Limit maximum width to maintain aspect ratio
                                    maxHeight: "200px" // Limit maximum height to maintain aspect ratio
                                }}
                            />
                        </div>
                    </Typography>
                    <Typography variant="body2">
                        Copyright &copy; {year} by{" RHIPFactory"}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footers;
