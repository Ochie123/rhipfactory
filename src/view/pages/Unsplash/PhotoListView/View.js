import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
} from '@mui/material';

import Header from './Header';
import Results from './Results';
import Page from '../../../../components/Page';

const AccessKey = 'frZ-Ilry71ODyHtsn6W_XKAa77h3ZUjVph_bydlEPnw';

const UnsplashPhotos = () => {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('https://api.unsplash.com/photos', {
          headers: {
            Authorization: `Client-ID ${AccessKey}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setPhotos(data);
        } else {
          console.error('Error fetching photos:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching photos:', error.message);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <Page title="Photo List">
      <div className="container mt-5">
      <Container maxWidth={false}>
        <Header />
      
 
    {photos && (
          <Box mt={3}>
            <Results results={photos} />
          </Box>
        )}       
      </Container>
      </div>
    </Page>
  );
};



export default UnsplashPhotos;
