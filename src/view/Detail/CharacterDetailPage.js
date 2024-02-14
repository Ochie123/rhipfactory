import React from 'react';
import Typography from '@mui/joy/Typography';
import { useQuery } from "react-query";

import { loadCharacter } from '../../data/rickymorty/api/api';

import { useParams } from 'react-router-dom';

export default function CharacterDetailPage() {
  const { id } = useParams();

  const { data: character } = useQuery(["currentCharacter", { id }], () =>
    loadCharacter(id)
  );

  return (
    <div className="container mt-5">
      {character && (
        <>
          <Typography textColor="primary.400" fontSize="xl3" fontWeight="xl" my={1}>
            {character.name}
          </Typography>

          <div className="my-5">
            <img
              src={character.image}
              alt={character.name}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>

          <Typography textColor="success.400" fontWeight="xl" my={1}>
            Gender: {character.gender}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Status: {character.status}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Species: {character.species}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Origin: {character.origin.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Location: {character.location.name}
          </Typography>

          <hr className="dark horizontal my-5" />
        </>
      )}
    </div>
  );
}
