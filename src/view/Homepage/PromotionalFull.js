import React from "react"
import { Grid } from "@mui/material"


import Promotional from "./Promotional"

// https://source.unsplash.com/XyONj_Aq-rg
//Image by <a href="https://www.freepik.com/free-photo/side-view-healthcare-professionals-meeting_32486210.htm#query=healthcare%20startups&position=16&from_view=keyword&track=ais&uuid=cb1636e8-6abb-4b5d-977f-46a0632a6292">Freepik</a>
// https://unsplash.com/photos/RGxEXgEym5U
export default function PromotionalFull() {
  

  return (
 
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <Promotional pageHeaderBgImg="" pageHeaderMinVh="50vh" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="row justify-content-center">
              <img
                src="/images/healthcare.jpeg"
                alt="Promotional"
                style={{ width: "100%", border:"0", height: "100%" }}
                loading="lazy"
              />
            </div>
          </Grid>
        </Grid>
     
  )
}