// @mui material components
import React from 'react';

import Card from '@mui/joy/Card';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import { Link} from "react-router-dom";

import MKBox from "../MKBox";
import MKTypography from "../MKTypography";

//https://unsplash.com/photos/3kb_g-vzVUo
//https://unsplash.com/photos/-09K4gOgo0o
//https://unsplash.com/photos/RGxEXgEym5U

function Lesson({ title}) {


  return (
<>
        <Box sx={{ display: 'flex', justifyContent: 'center',
        py: 1 }}>
      <Card variant="outlined" sx={{ width: 'auto', '@media (max-width: 600px)': {
            width: '360px', // Set width to 100% for screens with max width of 600px (mobile phones)
          }, }}>
      <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
        <MKBox
  
          loading="lazy"
          alt={title}
          borderRadius="lg"
          width="100%"
          position="relative"
          zIndex={1}
        />
        <MKBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top={0}
          sx={{
         
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </MKBox>
      <MKBox p={3} mt={-1} textAlign="center">
        <MKTypography display="inline" variant="h5" textTransform="capitalize" fontWeight="regular">
        Understanding your audience
        </MKTypography>
        <MKBox mt={1} mb={3}>
          <MKTypography variant="body2" component="p" color="text">
          Understanding your audience is crucial for tailoring your message to resonate with them. With this knowledge, you can adjust your content, language, and tone to ensure it's relevant and engaging.
          </MKTypography>
        </MKBox>
        <Link to={``}>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Find out more
        </Button>
        </Link>
      </MKBox>
         </Card>
       
         </Box>

         <Box sx={{ display: 'flex',  justifyContent: 'center',
        py: 1, }}>
       <Card variant="outlined" sx={{ width: 'auto', '@media (max-width: 600px)': {
            width: '360px', // Set width to 100% for screens with max width of 600px (mobile phones)
          }, }}>
       <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
        <MKBox

          loading="lazy"
          alt={title}
          borderRadius="lg"
          width="100%"
          position="relative"
          zIndex={1}
        />
        <MKBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top={0}
          sx={{
            
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </MKBox>
      <MKBox p={3} mt={-1} textAlign="center">
        <MKTypography display="inline" variant="h5" textTransform="capitalize" fontWeight="regular">
        Practice and preparation
        </MKTypography>
        <MKBox mt={1} mb={3}>
          <MKTypography variant="body2" component="p" color="text">
          The more you practice and prepare, the more confident and polished you'll be during your speech. Rehearse your material multiple times to become familiar with the flow and content. 
          </MKTypography>
        </MKBox>
        <Link to={``}>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Find out more
        </Button>
        </Link>
      </MKBox>

   </Card>
       </Box>

       <Box sx={{ display: 'flex',  justifyContent: 'center',
        py: 1, }}>
      <Card variant="outlined" sx={{ width: 'auto', '@media (max-width: 600px)': {
            width: '360px', // Set width to 100% for screens with max width of 600px (mobile phones)
          }, }}>
      <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
        <MKBox
  
          loading="lazy"
          alt={title}
          borderRadius="lg"
          width="100%"
          position="relative"
          zIndex={1}
        />
        <MKBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top={0}
          sx={{
            
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </MKBox>
      <MKBox p={3} mt={-1} textAlign="center">
        <MKTypography display="inline" variant="h5" textTransform="capitalize" fontWeight="regular">
        How To Tell compelling stories
        </MKTypography>
        <MKBox mt={1} mb={3}>
          <MKTypography variant="body2" component="p" color="text">
          People connect with stories on an emotional level. Incorporate relevant anecdotes and personal experiences into your speech to make your message memorable and relatable. 
          </MKTypography>
        </MKBox>
        <Link to={``}>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Find out more
        </Button>
        </Link>
      </MKBox>
       </Card>
        </Box>
          </>
  );
}

export default Lesson;