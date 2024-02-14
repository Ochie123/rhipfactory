import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import data from "../pages/data/designBlocksData";

import View from "../pages/UnsplashCode/View"
import unsplashCode1 from './UnsplashCode/components/code';

function DesignBlocks() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabs = (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="Design blocks tabs"
    >
      {data.map(({ title }) => (
        <Tab key={title} label={title} />
      ))}
    </Tabs>
  );

  const renderData = data.map(({ title, items }, index) => (
    <TabPanel key={title} value={value} index={index}>
      {title === "Demonstration" ? ( 
             <View code={unsplashCode1} height="40rem">
         
           </View>
      ) : (
        <Grid container spacing={3} sx={{ mb: 10 }} key={title}>

          <Grid item xs={12} lg={9}>
            <Grid container spacing={1}>
              {items.map(({ description, name, pro }) => (
                <>
                <Grid item xs={12} key={name}>
                   <Typography variant="h5" pt={0.5}>
                   {description}
                 </Typography>
                 </Grid>
                <Grid item xs={12} key={name}>
                   {name}
                </Grid>
                </>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}
    </TabPanel>
  ));

  return (
    <Box component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <Typography variant="h3" color="green">
            Read our Unsplash API Documentation
          </Typography>
          <Typography variant="body1" color="text">
            We have organized our API Documentation to make it easier for your use.
          </Typography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>
        <Box sx={{ display: { xs: 'block', lg: 'block' } }}>
          {renderTabs}
        </Box>
        {renderData}
      </Container>
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default DesignBlocks;
