import React from 'react'
import { EastZone, LoginPage, OutZone, PilihZona, WestZone} from './components'
import { Routes, Route } from 'react-router-dom'
//import Stack from '@mui/material/Stack';

export default function App() {
  return (
      <Routes>
          <Route exact path="/" element={ <LoginPage/> } />
          <Route exact path="/pilihzona" element={ <PilihZona/> } />
          <Route path="/west" element={ <WestZone/> } />
          <Route path="/out" element={ <OutZone/> } />
          <Route path="/east" element={ <EastZone/> } />
      </Routes>      
    //   <Routes>
    //   {/* Define routes for each page */}
    //   <Route path="/west" exact component={WestZone} />
    //   <Route path="/east" component={EastZone} />
    //   <Route path="/out" component={OutZone} />
    // </Routes>
    );
}