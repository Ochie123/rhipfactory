import React, { useState, useEffect } from 'react';
import Typography from '@mui/joy/Typography';
import { useParams } from 'react-router-dom';

const AccessKey = 'frZ-Ilry71ODyHtsn6W_XKAa77h3ZUjVph_bydlEPnw';

export default function PhotoDetailPage() {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await fetch(`https://api.unsplash.com/photos/${id}`, {
          headers: {
            Authorization: `Client-ID ${AccessKey}`, 
          },
        });

        if (response.ok) {
          const data = await response.json();
          setPhoto(data);
        } else {
          console.error('Error fetching photo details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching photo details:', error.message);
      }
    };

    fetchPhoto();
  }, [id]);

  return (
    <div className="container mt-5">
      {photo && (
        <>
          <Typography textColor="primary.400" fontSize="xl3" fontWeight="xl" my={1}>
            {photo.description}
          </Typography>

          <div className="my-5">
            <img
              src={photo.urls.regular}
              alt={photo.description}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>

          <Typography textColor="success.400" fontWeight="xl" my={1}>
            Photographer: {photo.user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Likes: {photo.likes}
          </Typography>
          <Typography variant="body2">
            Location: {photo.location ? `${photo.location.city}, ${photo.location.country}` : 'N/A'}
          </Typography>
          <Typography variant="body2">
            Tags: {photo.tags.map(tag => tag.title).join(', ')}
          </Typography>
          <Typography variant="body2">
            Download Link: <a href={photo.links.download} target="_blank" rel="noopener noreferrer">Download</a>
          </Typography>

          <hr className="dark horizontal my-5" />
        </>
      )}
    </div>
  );
}
