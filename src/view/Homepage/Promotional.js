import React, { useState } from "react"
import { useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Zoom from "@mui/material/Zoom";

// Import Timer component
import Timer from "./Timer";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

export default function Promotional({

  pageHeaderBgImg,
  pageHeaderMinVh,
  pageHeaderRadius,
}) {
  const styles = {
    pageHeader: {
      backgroundImage: `url(${pageHeaderBgImg})`,
      minHeight: pageHeaderMinVh,
      borderRadius: pageHeaderRadius,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  };
  const [justEnded, setJustEnded] = useState(false)
 const currentDate = new Date()
  const update = () => {
    setJustEnded(true)
  }

  const [checked, setChecked] = React.useState(true);
  const isMobile = useMediaQuery("(max-width:600px)");

  // Set end time for the timer (replace with your desired end time)
  const endTime = new Date("2024-04-14T00:00:00");


  return (
    <>
      <section>
        <div className="page-header py-5 py-md-0" style={styles.pageHeader}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-sm-9 text-center mx-auto">
                <div className="container">
                  <Grid container alignItems="center">
                    <Grid>
                      <Typography variant="h2" color="green" my={4}>
                        <Box sx={{ display: "flex" }}>
                          <Zoom
                            in={checked}
                            style={{
                              transitionDelay: checked ? "500ms" : "0ms",
                            }}
                          >
                            <Typography variant="h2" color="green">
                              Join the BuildHealth24 Hackathon!
                            </Typography>
                          </Zoom>
                        </Box>
                      </Typography>
                      <Typography variant="body2" color="text" mb={2}>
                        Develop healthcare solutions in 24 hours! Open to
                        Developers, Designers, Entrepreneurs, Healthcare
                        Professionals, and Students.
                      </Typography>
                      <Typography>
                        <Stack spacing={2} direction="row">
                          <Box display="flex" alignItems="center" p={2}>
                            <Box>
                              <Link to={`/`}>
                                <ColorButton variant="contained">
                                <Typography variant="h6" component="p" variant="h8"> 
                                  Register today
                                  </Typography><Icon sx={{ fontWeight: "bold" }}>
                                    arrow_forward
                                  </Icon>{" "}
                                </ColorButton>
                              </Link>
                            </Box>
                          </Box>
                          <Box display="flex" alignItems="center" p={2}>
                          <Box>
  {currentDate < new Date(endTime) ? (
    <ColorButton variant="contained">
      
        <Timer endTime={endTime} update={update} />
      
    </ColorButton>
  ) : (
    <div
      style={{
        bottom: "-20px",
        left: "0",
        padding: "15px"
      }}
    >
      <Typography>
        Registration ended
      </Typography>
    </div>
  )}
   </Box>
</Box>

                        </Stack>
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
