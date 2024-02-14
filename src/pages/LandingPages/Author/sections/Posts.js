// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Page from "components/Page";
// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images


function Places() {
  return (
    <>
    <Page title="Blogs- RhipFactory">
    <MKBox
    minHeight="75vh"
    width="100%"
    sx={{
      backgroundColor: "white", // Set the background color to black
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "grid",
      placeItems: "center",
    }}
  >
    <Container>
      <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
        <MKTypography
          variant="h1"
          color="Black"
          mt={-6}
          mb={1}
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["3xl"],
            },
          })}
        >
          Latest blogs {" "}
        </MKTypography>

      </Grid>
    </Container>
  </MKBox>
  </Page>
    </>
  );
}

export default Places;
