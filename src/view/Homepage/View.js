import React from "react"
import Card from "@mui/material/Card";
import {  Typography, useMediaQuery } from "@mui/material"
import Page from '../../components/Page';
//import Promotional from './Promotional';
import PromotionalFull from './PromotionalFull';
import Information from "../../pages/LandingPages/AboutUs/sections/Information";
import MoreAboutMe from './MoreAboutMe';
import Featuring from "../../pages/LandingPages/AboutUs/sections/Featuring";


const Main = () => {
  const mobileDevice = useMediaQuery("(max-width:650px)")


  return (
    <>
    <Page title="RhipFactory Kenya">
    
    {mobileDevice ? (
 
         < >
          <Typography variant={mobileDevice ? 'h4' : 'h2'}>
        
        <PromotionalFull/>
        <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        </Card>
        <MoreAboutMe/>
        <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      > 
        <Featuring />
        </Card>
        </Typography>
    </>
  
    ) : (
        <>  
        <PromotionalFull/>
        <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        </Card>
        <MoreAboutMe/>
        <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      > 
        <Featuring />
        </Card>
        </>
)}

    </Page>

    </>
  )
}

export default Main
