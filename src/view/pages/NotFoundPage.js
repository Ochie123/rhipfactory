import React from 'react';
import { Box, useMediaQuery, Typography } from '@mui/material';


import Page from '../../../src/components/Page'

const NotFoundPage = () => {
  const mobileDevice = useMediaQuery('(max-width:650px)');

  return (
    <Page title="Not Found Page">
    
        <Box
          height={mobileDevice ? '50vh' : '100vh'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          style={{
            backgroundColor: "white",
      
          }}
        >
          <Typography
          variant={mobileDevice ? 'h4' : 'h1'}
          color="Black"
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
            
            },
          })}
          style={{ display: "inline", padding: "5px" }}
        >
          404 Page Not Found
        </Typography>
        </Box>
    
    </Page>
  );
};

export default NotFoundPage;
