import React from 'react'

import './App.css'

import { Grid } from '@mui/material'

import { ClientDetails } from './components/ClientDetails'
import { JobDetails } from './components/JobDetails'
import { ServiceLocation } from './components/ServiceLocation'

function App() {
  return (
    <Grid container spacing={2} sx={{ m: 4, width: '1400px' }}>
      <Grid item xs={5}>
        <ClientDetails />
      </Grid>
      <Grid item xs={5}>
        <JobDetails />
      </Grid>
      <Grid item xs={5}>
        <ServiceLocation />
      </Grid>
    </Grid>
  )
}

export default App
