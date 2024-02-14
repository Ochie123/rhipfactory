import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { Link } from 'react-router-dom';

export default function MediaCard() {
  return (
    <>
  <div className="container mt-5">
  <Grid container justifyContent="center">
  <Typography variant="h3">
    Categories
 </Typography>
    <Grid>
    <Stack spacing={2} direction="row">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 40 }} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Characters
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Getting the list of characters by using the /character endpoint.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
        <Link to={`/characters`}>
        View all
      </Link>
        </Button>
      </CardActions>
    </Card>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 40 }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Episodes
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Accessing the list of episodes by using the /episode endpoint.
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">
        <Link to={`/episodes`}>
        View all
      </Link>
        </Button>
        </CardActions>
      </Card>
          <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 40 }} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Locations
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Accessing the list of locations by using the /location endpoint.
            </Typography>
          </CardContent>
          <CardActions>
          <Button size="small">
        <Link to={`/locations`}>
        View all
      </Link>
        </Button>
          </CardActions>
        </Card>
        </Stack>
        </Grid>
        </Grid>
        </div>
        </>
  );
}