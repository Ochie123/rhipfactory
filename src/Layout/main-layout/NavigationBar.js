import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = ['About'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
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
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img
              src="/images/rhipfactory.jpeg"
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

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
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
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           Home
          </Typography>
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
