/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import React from 'react';

import Grid from "@mui/material/Grid"
import { Typography, Box } from "@mui/joy"

// Material Kit 2 React components
import MKBox from "../MKBox"
import MKTypography from "../MKTypography"

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Typography
        fontSize="28px"
        align="center"
        borderRadius=""
        px={0.5}
        mr={0.5}
        sx={theme => ({
          ...theme.variants.soft.p,
          color: "",
          verticalAlign: "text-top"
        })}
      >
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2" color="blue">Mentored</MKTypography>
          <MKTypography variant="h2" color="green" textGradient mb={2}>
            2000+ public speakers
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Many youths across universities and governmental institutions love
            my lessons.
          </MKTypography>
        </Grid>

        <Box
          sx={{
            display: "flex",
            gap: 1,
            py: 1,
            overflow: "auto",
            width: "auto",

            margin: 1,
            scrollSnapType: "x mandatory",
            "& > *": {
              scrollSnapAlign: "center"
            },
            "::-webkit-scrollbar": { display: "none" }
          }}
        ></Box>
      </Typography>
    </MKBox>
  )
}

export default Information
