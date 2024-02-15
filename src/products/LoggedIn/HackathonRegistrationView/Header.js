import React from "react"
import { Link as RouterLink } from "react-router-dom"
import clsx from "clsx"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import {
  Breadcrumbs,
  Button,
  Grid,
  Link,
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
          <Link
            variant="body1"
            color="inherit"
            to="/"
            component={RouterLink}
          >
            Home
          </Link>
          <Box>
            <Typography variant="h3" color="inherit">
              Register today
            </Typography>
          </Box>
        </Breadcrumbs>
      </Grid>

    </Grid>
  )
}



export default Header
