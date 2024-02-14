import React from "react"
import { Link as RouterLink } from "react-router-dom"
import clsx from "clsx"
import NavigateNextIcon from  "@mui/icons-material/NavigateNext"
import {
  Box,
  Breadcrumbs,
  Grid,
  Link,
  Typography,
} from "@mui/material"


const Header = ({ className, ...rest }) => {
  return (
    <Grid
      container
      spacing={3}
      justify="space-between"
      className={clsx( className)}
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
            <Typography variant="body1" color="inherit">
              List Photos
            </Typography>
          </Box>
        </Breadcrumbs>
        <Typography variant="h4" color="textPrimary">
          All Photos
        </Typography>
      </Grid>
    </Grid>
  )
}


export default Header
