import { useState, useEffect } from "react";

// prop-types is a library for type checking of props
import PropTypes from "prop-types";

// react-copy-to-clipboard components
import { CopyToClipboard } from "react-copy-to-clipboard";

// react-syntax-highlighter components
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism'; 

import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Slide from "@mui/material/Slide";
import { Alert, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const getPhotoList = `
GET /photos
`;

const CodeDisplay = () => {
  return (
    <SyntaxHighlighter language="javascript" style={vs}>
      {getPhotoList}
    </SyntaxHighlighter>
  );
};


const getPhotoDetail = `
GET /photos/:id
`;

const CodeDisplay1 = () => {
  return (
    <SyntaxHighlighter language="javascript" style={vs}>
      {getPhotoDetail}
    </SyntaxHighlighter>
  );
};

const PhotoDetail = `
import React, { useState, useEffect } from 'react';
import Typography from '@mui/joy/Typography';
import { useParams } from 'react-router-dom';

const AccessKey = 'your-access-key';

export default function PhotoDetailPage() {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await fetch(\`https://api.unsplash.com/photos/\${id}\`, {
          headers: { Authorization: \`Client-ID \${AccessKey}\` },
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
            Location: {photo.location ? \`\${photo.location.city}, \${photo.location.country}\` : 'N/A'}
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
}`;


const CodeDisplayDetail = () => {
  return (
    <SyntaxHighlighter language="javascript" style={vs}>
      {PhotoDetail}
    </SyntaxHighlighter>
  );
};


function View({ children, code, title, height, ...rest }) {
  const [activeTab, setActiveTab] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleTabType = (event, newValue) => setActiveTab(newValue);

  useEffect(() => {
    setTimeout(() => setSuccess(false), 3000);
  }, [success]);

  return (
    
    <Box
      width="100%"
      position="relative"
      borderRadius="xl"
      shadow="lg"
      mb={12}
      sx={{ overflow: "hidden" }}
      {...rest}
    >
      <Box>

            <br>
              </br>
              <p>
                Th Unsplash API uses a Get request to return photos of a single page from the Editorial feed
                <CodeDisplay/>
              </p>
              <p>The example below shows how we can request a response using the command above </p>
            </Box>
            <Typography variant="h4" pt={0.5}>
                React code example
            </Typography>
          <Box px={3} >
        <Grid container spacing={2} justifyContent="space-between" py={1}>
          <Grid item xs={12} lg={3}>
          </Grid>
          <Grid item xs={12} lg={3}>
            <AppBar position="static">
              <Tabs value={activeTab} onChange={handleTabType}>
                <Link to={'/unsplash'}>
                <Tab
                  icon={
                    <Box
                      component="i"
                      color="white"
                      mr={1.25}
                      className="fas fa-desktop" 
                    />
                  }
                  label="Preview"
                />
                </Link>
                <Tab
                  icon={
                    <Box
                      component="i"
                      color="white"
                      mr={1.25}
                      className="fas fa-code"
                    />
                  }
                  label="Code"
                />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </Box>
      <Box display={activeTab === 0 ? "block" : "none"}>
        <Box width="100%" p={3}>
          <Box
            bgColor="grey-100"
            width="100%"
            height={height}
            maxHeight="40rem"
            borderRadius="xl"
            sx={{ overflowX: "hidden", overflowY: "scroll" }}
          >
            {children}
          </Box>
        </Box>
      </Box>
      <Box display={activeTab === 1 ? "block" : "none"} p={3}>
        <Box
          bgColor="grey-100"
          position="relative"
          width="100%"
          borderRadius="xl"
          sx={{ overflow: "hidden" }}
        >
          <CopyToClipboard text={code}>
            <Button
              variant="gradient"
              color="dark"
              size="small"
              sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
              onClick={() => setSuccess(true)}
            >
              <Box color="white" mr={0.5} className="fas fa-copy" /> Copy
            </Button>
          </CopyToClipboard>
          <Slide direction="down" in={success} unmountOnExit>
            <Box position="absolute" top="0.5rem" left={0} width="100%">
              <Alert
                width="25%"
                mx="auto"
                color="success"
                sx={{ minHeight: "2.5rem !important", py: 1, justifyContent: "center" }}
              >
                <Typography variant="body2" color="white" fontWeight="regular">
                  Code successfully copied!
                </Typography>
              </Alert>
            </Box>
          </Slide>
          <SyntaxHighlighter
            language="jsx"
            style={prism}
            showLineNumbers
            customStyle={{
              height,
              maxHeight: "40rem",
              fontSize: "1rem",
            
              padding: "1rem 1rem 1rem 0.25rem",
              overflowY: "scroll",
              margin: 0,
            }}
          >
            {code}
          </SyntaxHighlighter>
        </Box>

        <Typography variant="h4" pt={0.5}>
                How to get a Single photo details
            </Typography>
            <br></br>
            <b>
            We use the id parameter to retrieve a single photo.
            <CodeDisplay1/>
            </b>
            For example, here is an implementation in React Js.
            <CodeDisplayDetail/>
      </Box>
    </Box>
  );
}

// Setting default props for the View
View.defaultProps = {
  height: "auto",
};

// Typechecking props for the View
View.propTypes = {
  children: PropTypes.node.isRequired,
  code: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
};

export default View;
