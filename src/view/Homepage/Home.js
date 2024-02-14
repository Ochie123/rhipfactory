// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ApiIcon from '@mui/icons-material/Api';
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

function Home() {
  return (
    
      <Container>
        <Grid container alignItems="center">
          <Grid>
            <Typography variant="h2" color="green" my={4}>
            Join the BuildHealth24 Hackathon!
            </Typography>
            <Typography variant="body2" color="text" mb={2}>
            Develop healthcare solutions in 24 hours! Open to Developers, Designers, Entrepreneurs, Healthcare Professionals, and Students.
            </Typography>
            <Typography>
            <Stack spacing={2} direction="row">
              <Box display="flex" alignItems="center" p={2}>
                <Box>
                <Link to={`/unsplash`}>
                <ColorButton variant="contained"><ApiIcon/>Unsplash api <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon> </ColorButton>  
                </Link>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" p={2}>
                <Box>
                <Link to={`/ricky-morty`}>
                <ColorButton variant="contained"><ApiIcon/>Rick & Morty <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon> </ColorButton> 
                </Link> 
                </Box>
              </Box>
  
            </Stack>
              
            </Typography>
          </Grid>
        </Grid>
      </Container>
 
  );
}

export default Home;