import React from 'react'
import { Header, Tpss1, Tpss2, Tpss3, Tpss4 } from './ZonaLuar'
import Stack from '@mui/material/Stack';

const OutZone = () => {
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

export default OutZone