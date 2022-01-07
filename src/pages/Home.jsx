import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { config } from "../constants";

export default function Home() {
  function handleClick(event) {

    event.target.className = "cbutt amber";

    const bid = event.target.id;
    const newState = state[bid] === true ? false : true;

    const datatosend = {
      id: bid,
      method: newState,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datatosend),
    };

    fetch(config.api, requestOptions)
      .then((response) => response.json())
      .then((data) => Setstate(data));
  }

  const sampleState = { thermo: true, plug1: true, plug2: true, plug3: true };

  const [state, Setstate] = useState(sampleState);

  useEffect(() => {
    fetch(config.api)
      .then((response) => response.json())
      .then((data) => Setstate(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "left-align",
          gap: "60px",
        }}
      >
        <h1 style={{ backgroundColor: "white", textAlign: "center" }}>
          Talant Smart Home
        </h1>
        <button
          id="thermo"
          className={state.thermo ? "cbutt on" : "cbutt off"}
          onClick={handleClick}
        >
          Cave Floor Heating
        </button>

        <button
          id="plug1"
          className={state.plug1 ? "cbutt on" : "cbutt off"}
          onClick={handleClick}
        >
          Cave Radiator
        </button>

        <button
          id="plug2"
          className={state.plug2 ? "cbutt on" : "cbutt off"}
          onClick={handleClick}
        >
          Cave Fan
        </button>

        <button
          id="plug3"
          className={state.plug3 ? "cbutt on" : "cbutt off"}
          onClick={handleClick}
        >
          Fairy Lights
        </button>
      </Box>
    </Container>
  );
}
