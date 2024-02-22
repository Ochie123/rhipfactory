import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { red } from "@mui/material/colors";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)(({ theme }) => ({
	color: theme.palette.getContrastText(red[500]),
	backgroundColor: red[500],
	"&:hover": {
		backgroundColor: red[700],
	},
}));



function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="https://rhipfactory.co.ke" // External link for the "Home" page
            target="_blank" // Open link in a new tab
            rel="noopener noreferrer" // Recommended for security
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black', // Change color to black for visibility on white background
              textDecoration: 'none',
            }}
          >
            <img
              src="/images/RHIPFactory-logo.png"
              alt="Promotional"
              style={{
                width: '100%',
                border: '0',
                height: 'auto',
                maxWidth: '200px',
                maxHeight: '200px',
              }}
            />
          </Typography>
          <Box sx={{ flexGrow: 8 }} /> {/* This box pushes the Homepage Typography to the right */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="https://rhipfactory.co.ke"// Change this to the actual URL of your homepage
            sx={{
              display: { xs: 'flex', md: 'flex' }, // Display only on medium screens and above
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black', // Change color to black for visibility on white background
              textDecoration: 'none',
            }}
          >
            		    <ColorButton
                     >
        <Typography>Homepage</Typography>
		</ColorButton>
            
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
