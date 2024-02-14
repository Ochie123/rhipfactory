/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is library for typechecking of props
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack'
import PropTypes from "prop-types";
import { Typography } from '@mui/material';

import { Box } from '@mui/joy';
// @mui material components

import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
// Material Kit 2 React component
function Card({ color, image, name, date, review, rating }) {
  const ratings = {
    1: [
      <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={1} precision={0.5} />
      </Stack>
    ],

    2: [
      <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2} precision={0.5} />
      </Stack>
    ],
    3: [
      <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={3} precision={0.5} />
      </Stack>
    ],
    4: [
      <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={4} precision={0.5} />
      </Stack>
    ],
    5: [
      <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={5} precision={0.5} />
      </Stack>
    ],
  };

  return (
    <Box
      variant={color === "transparent" ? "contained" : "gradient"}
      bgColor={color}
      borderRadius="xl"
      shadow={color === "transparent" ? "none" : "md"}
      p={3}
    >

<Avatar
          variant="rounded"
          size="lg"
          shadow="md"
          sx={{ mt: -5, mb: 1 }}
>
             <PersonIcon />
            </Avatar> 
  
      <Box lineHeight={1}>
        <Typography
          display="block"
          variant={image ? "button" : "h6"}
          fontWeight="bold"
          color={color === "transparent" || color === "light" ? "dark" : "white"}
          mb={0.5}
        >
          {name}
        </Typography>
        <Typography
          variant={image ? "caption" : "button"}
          fontWeight="regular"
          lineHeight={1}
          color={color === "transparent" || color === "light" ? "text" : "white"}
          sx={{ display: "flex", alignItems: "center" }}
        >
        
          {date}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        color={color === "transparent" || color === "light" ? "text" : "white"}
        my={4}
      >
        &quot;{review}&quot;
      </Typography>
      <Typography
        variant="h2"
        color={color === "transparent" || color === "red" ? "text" : "red"}
        sx={{
          display: "flex",
          alignItems: "center",
   
        }}
      >
        {ratings[rating]}
      </Typography>
    </Box>
  );
}

// Setting default values for the props of DefaultReviewCard
Card.defaultProps = {
  color: "transparent",
  image: "",
};

// Typechecking props for the DefaultReviewCard
Card.propTypes = {
  color: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  rating: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
};

export default Card;
