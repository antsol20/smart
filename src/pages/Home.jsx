import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { config } from "../constants";
import { useCookies } from "react-cookie";

export default function Home() {

  const [cookie] = useCookies();

  function handleClick(event) {

    event.target.className = "cbutt amber";

    const bid = event.target.id;
    const newState = state[bid] === true ? false : true;

    const datatosend = {
      id: bid,
      method: newState,
      session: cookie.talant_smart.session
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

  const sampleState = { thermo: undefined, plug1: undefined, plug2: undefined, plug3: undefined };

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
      <h1 style={{ backgroundColor: "white", textAlign: "center" }}>
          Talant Smart Home
        </h1>
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "left-align",
          gap: "60px",
        }}
      >
        
        <button
          id="thermo"
          className={state.thermo ? "cbutt on" : state.thermo === undefined ? "cbutt pending" : "cbutt off" }
          onClick={handleClick}
        >
          Cave Floor Heating
        </button>

        <button
          id="plug1"
          className={state.plug1 ? "cbutt on" : state.plug1 === undefined ? "cbutt pending" : "cbutt off" }
          onClick={handleClick}
        >
          Cave Radiator
        </button>

        <button
          id="plug2"
          className={state.plug2 ? "cbutt on" : state.plug2 === undefined ? "cbutt pending" : "cbutt off" }
          onClick={handleClick}
        >
          Cave Fan
        </button>

        <button
          id="plug3"
          className={state.plug3 ? "cbutt on" : state.plug3 === undefined ? "cbutt pending" : "cbutt off" }
          onClick={handleClick}
        >
          Fairy Lights
        </button>

        <button
          id="plug4"
          className={state.plug4 ? "cbutt on" : state.plug4 === undefined ? "cbutt pending" : "cbutt off" }
          onClick={handleClick}
        >
          Fish Tank
        </button>
      </Box>
    </Container>
  );
}
