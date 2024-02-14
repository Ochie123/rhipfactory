import React, { useState } from 'react';
import Typography from "@mui/material/Typography";
import { Search as SearchIcon } from "react-feather";
import { Box, Card, InputAdornment, SvgIcon, TextField, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Page from '../../../components/Page';
import { loadCharacters } from "../../../data/rickymorty/api/api";

export default function Characters() {
  const { data: charactersData = { results: [] } } = useQuery(
    "results",
    loadCharacters
  );
  const allResults = charactersData.results;

  const [filters, setFilters] = useState({
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
  });

  const filteredCharacters = allResults.filter(character => {
    return Object.entries(filters).every(([key, value]) => {
      if (value === '') return true;
      return character[key].toLowerCase().includes(value.toLowerCase());
    });
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  return (
    <Page title="Character List">
      <div className="container mt-5">
        <Typography variant="body1" color="inherit">
          List Characters
        </Typography>
        <Card>
          <Box p={2}>
            <Box display="flex" alignItems="center">
              <TextField
                className=""
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search characters"
                variant="outlined"
                name="name"
                value={filters.name}
                onChange={handleInputChange}
              />
              <Box flexGrow={1} />
              <TextField
                label="Status"
                name="status"
                onChange={handleInputChange}
                select
                SelectProps={{ native: true }}
                value={filters.status}
                variant="outlined"
              >
                <option value="">Select Status</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
              </TextField>
            </Box>
            <br />
            <Box display="flex" alignItems="center">
              <TextField
                label="Gender"
                name="gender"
                onChange={handleInputChange}
                select
                SelectProps={{ native: true }}
                value={filters.gender}
                variant="outlined"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unknown">Unknown</option>
              </TextField>
              <Box flexGrow={1} />
              <TextField
                label="Species"
                name="species"
                onChange={handleInputChange}
                select
                SelectProps={{ native: true }}
                value={filters.species}
                variant="outlined"
              >
                <option value="">Select Species</option>
                <option value="human">Human</option>
                <option value="alien">Alien</option>
              </TextField>
            </Box>
          </Box>
        </Card>
        <br />
        <Grid container spacing={4}>
          {filteredCharacters.map((character) => (
            <Grid item key={character.id} xs={6} lg={3}>
              <Link to={`/characters/${character.id}`} className="col-md-3 col-sm-6">
                <div className="mb-3">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="img-fluid rounded-circle"
                  />
                  <Typography textColor="success.400" fontWeight="xl" my={1}>
                    {character.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Status: {character.status}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Species: {character.species}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Gender: {character.gender}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Origin: {character.origin.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Location: {character.location.name}
                  </Typography>
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </Page>
  );
}
