/* eslint-disable no-template-curly-in-string */
const unsplashCode1 = `/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
} from '@mui/material';

import Header from './Header';
import Results from './Results';
import Page from '../../../../components/Page';

const AccessKey: string = 'your-access-key';

const UnsplashPhotos: React.FC = () => {
  const [photos, setPhotos] = useState<any[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('https://api.unsplash.com/photos?page=1', {
          headers: {
            Authorization: 'your-access-key',
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
`;

export default unsplashCode1;
