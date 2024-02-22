import React, { lazy, Suspense } from 'react';

import { createGlobalStyle } from "styled-components";

import 'react-quill/dist/quill.snow.css';
import { SnackbarProvider } from 'notistack';
import Helmet from 'react-helmet';
import { LinearProgress } from '@mui/material';

import "../src/view/Detail/style.css"
//import "../src/view/Detail/scss/astro-ecommerce.scss"

//import Homepage from './view/Homepage';
import MainLayout from '../src/Layout/main-layout/MainLayout'


import DataProvider from './data';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Raleway', sans-serif;
  }
  body {
    margin: 2;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;


//const LoginPage = lazy(() => import('./view/auth/LoginPage'));
const AboutPage = lazy(() => import('./view/pages/AboutPage'));
const NotFoundPage = lazy(() => import('./view/pages/NotFoundPage'));


const HackathonRegistrationView = lazy(() => import('./products/LoggedIn/HackathonRegistrationView'))
function App() {
 

  return (
    <> 
    <DataProvider>    
  
      <GlobalStyle />
      <SnackbarProvider dense maxSnack={3}>

      <CssBaseline />
      <Router>
      <Helmet
          titleTemplate="%s - RhipFactory"
          defaultTitle="RhipFactory"
        >
          <meta name="description" content="RhipFactory" />
        </Helmet> 
        <MainLayout>
        <Suspense fallback={<LinearProgress style={{ margin: '10rem' }} />}>
        <Routes>

        <Route path='/' element={<HackathonRegistrationView/>}/>
     
        <Route path="/registration-successful" element={<AboutPage />} />
     
        <Route path='/not-found' element={<NotFoundPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
    
        </Routes>
        
        </Suspense>
        </MainLayout>
   
      </Router>

      </SnackbarProvider>
     
      </DataProvider> 
      </>
  );
}

export default App;
