import React from "react";
import "./Tpss3.css";
import { bEmpty, bFull, bNormal, bInactive } from "../../../assets";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const Tpss1 = () => {
  const [data, setData] = useState([]);

  const fetchData = async (noTPS) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/influxQ`,
        {
          noTPSS: "3",
          noTPS,
          zona: "dataBinSense",
        }
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getImageSrc = (data) => {
    switch (data[0]) {
      case "1":
        return bEmpty;
      case "2":
        return bNormal;
      case "3":
        return bFull;
      default:
        return bInactive;
    }
  };

  const [imageSrc1, setImageSrc1] = useState("");
  const [imageSrc2, setImageSrc2] = useState("");
  const [imageSrc3, setImageSrc3] = useState("");
  const [imageSrc4, setImageSrc4] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData("1")
        .then((data1) => {
          const src = getImageSrc(data1);
          setImageSrc1(src);
        })
        .catch((error) => {
          console.error(error);
        });

      fetchData("2")
        .then((data2) => {
          const src = getImageSrc(data2);
          setImageSrc2(src);
        })
        .catch((error) => {
          console.error(error);
        });

      fetchData("3")
        .then((data3) => {
          const src = getImageSrc(data3);
          setImageSrc3(src);
        })
        .catch((error) => {
          console.error(error);
        });

      fetchData("4")
        .then((data4) => {
          const src = getImageSrc(data4);
          setImageSrc4(src);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 10000);

    return () => clearInterval(interval);
  }, []);
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
          TPSS 3
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
            <Stack direction="row" spacing={2}>
              <img src={imageSrc1} alt="" />
              <img src={imageSrc2} alt="" />
              <img src={imageSrc3} alt="" />
              <img src={imageSrc4} alt="" />
            </Stack>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Tpss1;
