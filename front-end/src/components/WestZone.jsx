import React from 'react'
import { Header, Tpss1, Tpss2, Tpss3, Tpss4 } from './ZonaBarat'
import Stack from '@mui/material/Stack';

const WestZone = () => {
  return <div>
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
}

export default WestZone