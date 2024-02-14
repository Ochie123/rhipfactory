import React from "react";
import Container from "@mui/material/Container";
import Carousel from 'react-bootstrap/Carousel';
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MKBox from "../../../src/Layout/main-layout/MKBox";
import MKTypography from "../../../src/Layout/main-layout/MKTypography";

// Import images
import rimage1 from "assets/images/logos/gray-logos/image1.jpeg";
import rimage2 from "assets/images/logos/gray-logos/image2.jpeg";
import rimage3 from "assets/images/logos/gray-logos/image3.jpeg";

function MoreAboutMe(props) {
    return (
        <MKBox component="section" py={{ xs: 3, md: 12 }}>
            <Container>
                <Grid container alignItems="center">
                    <Grid item xs={12} lg={5}>
                        <Typography variant="h2" color="green" my={1}>
                            Event Highlights
                        </Typography>
                        <MKTypography variant="body2" color="text" mb={2}>
                            A Build/Code for Better Health event highlights innovative solutions merging technology and healthcare. Participants collaborate to develop applications, devices, and systems aiming to improve patient care, disease management, and overall well-being.
                        </MKTypography>
                        <MKTypography
                            component="a"
                            href="#"
                            variant="body2"
                            color="info"
                            fontWeight="regular"
                            sx={{
                                width: "max-content",
                                display: "flex",
                                alignItems: "center",
                                "& .material-icons-round": {
                                    fontSize: "1.125rem",
                                    transform: "translateX(3px)",
                                    transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                                },
                                "&:hover .material-icons-round, &:focus .material-icons-round": {
                                    transform: "translateX(6px)",
                                },
                            }}
                        >
                            More about the event
                            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                        </MKTypography>
                    </Grid>
                    <Grid item xs={12} lg={6} sx={{ ml: { xs: 0, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>

                      <Card>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={rimage1}
                                    alt="First slide"
                                    loading="lazy"
                                />
                                <Carousel.Caption className="carousel-caption">
                                
                                    <p className="carousel-description">Workshops, Hands-On Sessions, And Networking Opportunities.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={rimage2}
                                    alt="Second slide"
                                    loading="lazy"
                                />
                                <Carousel.Caption className="carousel-caption">

                                    <p className="carousel-description">Innovative Cutting-Edge Tech Solutions For Africa By Africans.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={rimage3}
                                    alt="Third slide"
                                    loading="lazy"
                                />
                                <Carousel.Caption className="carousel-caption">

                                    <p className="carousel-description">Special Guests, Seasoned Mentors, Founders And Panel Of Judges.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default MoreAboutMe;
