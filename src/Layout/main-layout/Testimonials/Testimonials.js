import React from 'react';
import Box from '@mui/joy/Box';
import Testimonial from './Testimonial';

const Testimonials = () => (
    <>
    <Box
    sx={{
      display: 'flex',
      gap: 1,
      py: 1,
      overflow: 'auto',
      width: 'auto',
     
      margin: 1,
      scrollSnapType: 'x mandatory',
      '& > *': {
        scrollSnapAlign: 'center',
      },
      '::-webkit-scrollbar': { display: 'none' },
    }}
  >
   
    <Testimonial/>
  
  </Box>
  </>
);

export default Testimonials;
