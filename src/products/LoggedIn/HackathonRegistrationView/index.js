import React from 'react';
import { Container} from "@mui/material"

import Header from './Header';
import HackathonCreateForm from './HackathonCreateForm';
import Page from '../../../components/Page';

const HackathonCreateView = () => {

  return (
    <Page className="" title="Register Form">
      <Container maxWidth="lg">
        <Header />
        <HackathonCreateForm />
      </Container>
    </Page>
  );
};


export default HackathonCreateView;
