import React from 'react';
import Box from '@mui/joy/Box';
import Lesson from './Lesson';

import styled from "styled-components";


const Main = styled.main`
  margin: 1em;
`;


const Lessons = () => (
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
   
    <Lesson/>
  
  </Box>
  </>
);

export default Lessons;
