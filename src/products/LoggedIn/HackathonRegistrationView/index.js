import React from 'react';
import {

  Typography,
  Container,
  Card,
	CardContent,
	CardHeader,
  Box
} from "@mui/material"

import Header from './Header';
import HackathonCreateForm from './HackathonCreateForm';
import Page from '../../../components/Page';

const HackathonCreateView = () => {

  return (
    <Page className="" title="Register Form">
      <Header />
      <Container maxWidth="lg">
      <br></br>

<Box mt={1} mb={1} >

<Card>
<CardHeader
  title={<Typography variant="h5" style={{ fontWeight: "bold" }}>REGISTRATION FORM</Typography>}
/>
        <CardContent>
          <Typography variant="body1" >
Fill in the required field to register for the upcoming BuildHealth24 Hackathon
          </Typography>
      </CardContent>
        </Card>
</Box>
        <HackathonCreateForm />
      </Container>
    </Page>
  );
};


export default HackathonCreateView;
