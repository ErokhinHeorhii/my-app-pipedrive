import React from 'react'

import { Box, Paper, TextField, Typography } from '@mui/material'

import { SEARCH_REGEXP } from '../constant/regex'

import { PropsType } from './JobDetails'
export type ClientDetailsType = {
  FirstName: string
  SecondName: string
  Phone: number
  Email: string
}
export const ClientDetails = ({ register, errors }: PropsType) => {
  return (
    <Paper elevation={3} sx={{ m: 2, height: 230 }}>
      <Typography sx={{ ml: 2 }} variant="h6">
        Client details
      </Typography>
      <Box sx={{ m: 2, display: 'flex', justifyContent: 'space-between', gap: 2 }}>
        <TextField
          label={errors.FirstName ? errors.FirstName.message || 'First name' : 'First name'}
          variant="outlined"
          size={'small'}
          sx={{ width: '250px' }}
          {...register('FirstName', {
            required: true,
            pattern: { value: SEARCH_REGEXP.LETTERS, message: 'invalid data format' },
          })}
          error={!!errors.FirstName}
        />
        <TextField
          label={errors.SecondName ? errors.SecondName.message || 'Second name' : 'Second name'}
          variant="outlined"
          size={'small'}
          sx={{ width: '250px' }}
          {...register('SecondName', {
            required: true,
            pattern: { value: SEARCH_REGEXP.LETTERS, message: 'invalid data format' },
          })}
          error={!!errors.SecondName}
        />
      </Box>
      <Box sx={{ m: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label={errors.Phone ? errors.Phone.message || 'Phone' : 'Phone'}
          variant="outlined"
          size={'small'}
          {...register('Phone', {
            required: true,
            pattern: { value: SEARCH_REGEXP.NUMBERS, message: 'invalid data format' },
          })}
          error={!!errors.Phone}
        />
        <TextField
          label="Email (optional)"
          variant="outlined"
          size={'small'}
          {...register('Email')}
        />
      </Box>
    </Paper>
  )
}
