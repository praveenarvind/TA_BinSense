import React from "react";
import { Header, Tpss1, Tpss2, Tpss3, Tpss4 } from "./ZonaTimur";
import Stack from "@mui/material/Stack";

const EastZone = () => {
  return (
    <div>
      <Header />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={-2}
      >
        <Tpss1 />
        <Tpss2 />
        <Tpss3 />
        <Tpss4 />
      </Stack>
    </div>
  );
};

export default EastZone;
