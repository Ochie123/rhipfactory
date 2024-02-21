// @mui material components
import PropTypes from "prop-types";
import React from 'react';

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import { Box } from "@mui/joy";
//import {Typography} from "@mui/joy";
import {Typography} from "@mui/material"
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footers({ links, socials, light}){

    const year = new Date().getFullYear();

    const renderLinks = links.map((link) => (
        <Typography
          key={link.name}
          variant="body2"
          color={ "white"}
          fontWeight="regular"
        >
          {link.name}
        </Typography>
      ));
    
      const renderSocials = socials.map((social) => (
        <Typography

        variant="body2"
        color={light ? "white" : "secondary"}
        fontWeight="regular"
      >
        {social.icon}
        </Typography>
      ));
    
    return (
        <Box component="footer" py={6}>
          <Grid container justifyContent="center">
            <Grid item xs={10} lg={8}>
              <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                spacing={{ xs: 2, lg: 3, xl: 6 }}
                mb={3}
              >
                {renderLinks}
              </Stack>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Stack display="flex" direction="row" justifyContent="center" spacing={3} mt={1} mb={3}>
              {renderSocials}
              </Stack>
            </Grid>
            <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
              <Typography variant="body2" color={ "white"}>
                Copyright &copy; {year} by{" "}
                <Typography
                 
                  target="_blank"
                  rel="noreferrer"
                  variant="body2"
                  color={ "white"}
                >
            <div className="row justify-content-center">

            <img
    src="/images/rhipfactory.png"
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
                
              </Typography>
            </Grid>
          </Grid>
        </Box>
      );
}

Footers.defaultProps = {
    company: {  name: "Assess" },
    links: [
      {  name: "Company" },
      { name: "About Us" },
      { name: "Products" },

    ],
    socials: [
      { icon: <FacebookIcon fontSize="small" />,  
  },
      {
        icon: <TwitterIcon fontSize="small" />,
    
      },
      {
        icon: <InstagramIcon fontSize="small" />,
        
      },

    ],
    light: true,
  };
  
 
Footers.propTypes = {
    company: PropTypes.objectOf(PropTypes.string),
    links: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
    socials: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
    light: PropTypes.bool,
  };

export default Footers;