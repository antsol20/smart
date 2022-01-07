import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";


export default function Home() {
  
  return (
    <div style={{ backgroundImage: '/images/smart.png'}}>
    <Container component="main" maxWidth="xs"  >
      <CssBaseline />
        <Typography component="h1" variant="h5">
          Find a Shared Bill
        </Typography>
    </Container>
    </div>
  );
}
