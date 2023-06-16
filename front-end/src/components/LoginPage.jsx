import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { binS} from '../assets'
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can call your back-end API to authenticate the user
    axios.post(`${import.meta.env.VITE_API_URL}/login`,
    {
      username, password
    }).then((res) => {
      if (res.data.success) navigate("/pilihzona", {replace: true});
    }).catch((e) => {
      console.log(e);
    })
  };

  return (
    <div>
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        position: 'absolute',
        width: 347,
        height: 300,
        left: 810,
        top: 190,
        display: 'flex', // add this line
    flexDirection: 'column', // add this line
    justifyContent: 'center', // add this line
    alignItems: 'center', // add this lin
    gap: "20px"
      }}
    >
      
    <TextField
      label="Username"
      value={username}
      onChange={(event) => setUsername(event.target.value)}
      sx={{
        bgcolor: "#D9D9D9",
        borderRadius: "10px",
        color: "black",
        border: 'red'
      }}
      />
    <TextField
      label="Password"
      type="password"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
      sx={{
        bgcolor: "#D9D9D9",
        borderRadius: "10px",
        color: "black",
        border: 'red'
      }}
      />
    <Button type="submit"
    sx={{
        width: 127,
        height: 54,
        background: '#162607',
        color: 'white',
        borderRadius: 2,
        '&:hover': {
            background: '#163100',
            boxShadow: "4px 4px 4px rgba(0,0,0,0.5)"
          },}}>
            
            Login
            
            </Button>
  </Box>




    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={3}
      sx={{
        position: 'absolute',
        width: 720,
        height: 600,
        left: 0,
        top: 0,
        bgcolor: '#D9D9D9',
        boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
      }}
    >
        <Typography
      sx={{
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 80,
        lineHeight: '97px',
        color: '#6F8E74',
      }}
    >
      BinSense
    </Typography>

    <img src={binS} alt="" />

    </Box>
    </div>
    
  );
};

export default LoginPage;
