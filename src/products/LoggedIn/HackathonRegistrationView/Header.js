import React from "react"
import clsx from "clsx"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import {
  Breadcrumbs,
  Grid,
  Typography,
 
  Box
} from "@mui/material"

const Header = ({ className, ...rest }) => {
 

  return (
    <Grid
      className={clsx("", className)}
      container
      justify="space-between"
      spacing={3}
      {...rest}
    >
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
 
          <Box mt={3} mb={4}>

            <Typography variant="h3" color="Green" >
            🇰🇪Register For BuildHealth24 Hackathon, Nairobi!🇰🇪
            </Typography>
          </Box>
        </Breadcrumbs>
      </Grid>

    </Grid>
  )
}



export default Header
