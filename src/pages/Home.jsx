import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { config } from "../constants";
import { useCookies } from "react-cookie";

export default function Home() {

  const [cookie, setCookie] = useCookies();

  const cookie_data = {
    session: "5da291a3-c94f-44b9-bdda-4d6f3458c2a6"
  };

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

  const sampleState = { thermo: true, plug1: true, plug2: true, plug3: true };

  const [state, Setstate] = useState(sampleState);

  useEffect(() => {

    setCookie("talant_smart", cookie_data, {
      path: "/",
      maxAge: 31536000,
      secure: true,
    });
  

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
