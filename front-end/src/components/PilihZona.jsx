import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Typography} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { WestZone, EastZone, OutZone } from './index'
import { truck } from '../assets'

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: '#6f8e74',
          color: 'white',
        },
      },
    },
  },
});

const PilihZona = () => {
  return (
    <>
      <div>
        <nav>
          {/* Create buttons with links to different pages */}
          <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={3}
      sx={{
        position: 'absolute',
        width: 1250,
        height: 600,
        left: 0,
        top: 0,
        bgcolor: '#162607',
        boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Box
      sx={{
        position: 'absolute',
        width: '200px',
        height: '72px',
        left: '530px',
        top: '50px',
        background: '#000000',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
        display: 'flex', // add this line
    flexDirection: 'column', // add this line
    justifyContent: 'center', // add this line
    alignItems: 'center', // add this lin
      }}
    >
      <Typography style={{color: 'white', fontSize: '40px', fontFamily:'Georama'}}>ZONA</Typography>
    </Box>
          <Box
      sx={{
        position: 'absolute',
        width: 347,
        height: 300,
        left: 150,
        top: 160,
        display: 'flex', // add this line
    flexDirection: 'column', // add this line
    justifyContent: 'center', // add this line
    alignItems: 'center', // add this lin
    gap: "20px"
      }}
    > 
          <ThemeProvider theme={theme}>
            <Button component={Link} to="/west" variant="contained" color="success"
              sx={{width: 500,
              height: 99.4,}}>
                <Typography variant="button" style={{ fontFamily: 'Georama', color:'black', fontSize: '40px', fontWeight: '700px' }}>
                  <span style={{backgroundColor:"#d9d9d9", padding:'19px'}}>BARAT</span>
                </Typography>
            </Button>
          </ThemeProvider>

          <ThemeProvider theme={theme}>
            <Button component={Link} to="/out" variant="contained" color="success"
              sx={{width: 500,
              height: 99.4,}}>
                <Typography variant="button" style={{ fontFamily: 'Georama', color:'black', fontSize: '40px', fontWeight: '700px' }}>
                  <span style={{backgroundColor:"#d9d9d9", padding:'19px'}}>{'\u00A0'}LUAR{'\u00A0'}</span>
                </Typography>
            </Button>
          </ThemeProvider>
          
          
          
          <ThemeProvider theme={theme}>
            <Button component={Link} to="/east" variant="contained" color="success"
              sx={{width: 500,
              height: 99.4,}}>
                <Typography variant="button" style={{ fontFamily: 'Georama', fontSize: '40px', fontWeight: '700px', color:'black' }}>
                  <span style={{backgroundColor:"#d9d9d9", padding:'19px'}}>TIMUR</span>
                </Typography>
            </Button>
          </ThemeProvider>

    </Box>
    <Box 
    sx={{
      position: "absolute",
      left: 650,
      top: 87,
    }}>
      <img src={truck} alt='' style={{ width: '535px', height: '423px' }}
     />
    </Box>
    </Box>
        </nav>
      </div>
      </>
  );
};

export default PilihZona;
