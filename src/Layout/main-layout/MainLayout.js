import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Divider, Box } from '@mui/material';

import NavigationBar from './NavigationBar'

import Footers from './Footers';

//import './Layout.scss'
const MainLayout = ({ children } ) => {
    return (
        <>   
      <NavigationBar/>
       
        <div className="true">{children}
        <Analytics />
        </div>
       
       
        <Box mt={9} mb={9} >
        <Footers/>      
        </Box>
        </>
    )
}

export default MainLayout;