import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import NavigationBar2 from './NavigationBar2'
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import SignInBasic from '../../pages/LandingPages/SignIn';
import routes from "routes";


function ResponsiveAppBar() {

//  type: "external",

  return (
  
<NavigationBar2
        routes={routes}
        action={{
          type: "internal",
        
        
       
        }}
        transparent
        light
      />
      
   
  );
}
export default ResponsiveAppBar;