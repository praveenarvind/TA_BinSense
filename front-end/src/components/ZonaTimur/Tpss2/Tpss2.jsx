import React from "react";
import "./Tpss2.css";
import { bEmpty, bFull, bNormal, bInactive } from "../../../assets";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Tpss2 = () => {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minWidth="100vh"
        sx={{ textAlign: "center", mt: 5 }}
      >
        <Typography
          variant="h5"
          sx={{ color: "#fff", fontSize: "20px", fontWeight: 700 }}
        >
          {" "}
          TPSS 2
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minWidth="100vh"
        sx={{
          width: 700,
          height: 245,
          background: "#6F8E74",

          boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "10px",
          border: "2px solid #000",
        }}
      >
        <div clas="content-wrapper">
          <h5 className="my-paragraph">
            Tanaman{"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}Sisa Makanan{"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}Organik{"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}Residu
          </h5>

          <div className="image-container">
            <img src={bInactive} alt="" />
            <img src={bInactive} alt="" />
            <img src={bInactive} alt="" />
            <img src={bInactive} alt="" />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Tpss2;
