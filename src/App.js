import React, { lazy, Suspense } from 'react';

import { createGlobalStyle } from "styled-components";

import 'react-quill/dist/quill.snow.css';
import { SnackbarProvider } from 'notistack';
import Helmet from 'react-helmet';
import { LinearProgress } from '@mui/material';
import "../src/view/Detail/scss/astro-ecommerce.scss"
import "../src/Layout/main-layout/Layout.scss"
import "../src/view/Detail/style.css"
//import Homepage from './view/Homepage';
import MainLayout from '../src/Layout/main-layout/MainLayout'

import theme from "./assets/theme";


import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
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

const Homepage = lazy(() => import('./view/Homepage'));
//const LoginPage = lazy(() => import('./view/auth/LoginPage'));
const AboutPage = lazy(() => import('./view/pages/AboutPage'));
const NotFoundPage = lazy(() => import('./view/pages/NotFoundPage'));
const ContactUs = lazy(() => import('pages/LandingPages/ContactUs'));
const Presentation = lazy(()=> import('./pages/Presentation'))
const Places = lazy(() => import('./pages/LandingPages/Author/sections/Posts'))
const SignInBasic = lazy(() => import('./pages/LandingPages/SignIn'))
const HackathonRegistrationView = lazy(() => import('./products/LoggedIn/HackathonRegistrationView'))
function App() {
 

  return (
    <>      
    <ThemeProvider theme={theme}>
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

        <Route path="/" element={<Homepage />} />
     
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path='/rhipfactory-for-developers/' element={<Presentation/>}/>
        <Route path='/blog' element={<Places/>}/>
        <Route path='/register' element={<HackathonRegistrationView/>}/>
        <Route path='/sign-in' element={<SignInBasic/>}/>

        <Route path='/not-found' element={<NotFoundPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
    
        </Routes>
        
        </Suspense>
        </MainLayout>
   
      </Router>

      </SnackbarProvider>
      </ThemeProvider>
      </>
  );
}

export default App;
