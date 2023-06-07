import React from 'react'

import { Box, MenuItem, Paper, TextField, Typography } from '@mui/material'

import { area } from '../constant/area'
import { SEARCH_REGEXP } from '../constant/regex'

import { PropsType } from './JobDetails'
export type ServiceLocationType = {
  Address: string
  City: string
  State: string
  ZipCode: string
  Area: string
}
export const ServiceLocation = ({ register, errors }: PropsType) => {
  return (
    <Paper elevation={3} sx={{ m: 2, height: 300 }}>
      <Typography sx={{ ml: 2 }} variant="h6">
        Service location
      </Typography>
      <Box sx={{ m: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label={errors.Address ? errors.Address.message || 'Address' : 'Address'}
          variant="outlined"
          size={'small'}
          {...register('Address', {
            required: true,
            pattern: { value: SEARCH_REGEXP.ADDRESS, message: 'invalid data format' },
          })}
          error={!!errors.Address}
        />
        <TextField
          label={errors.City ? errors.City.message || 'City' : 'City'}
          variant="outlined"
          size={'small'}
          {...register('City', {
            required: true,
            pattern: { value: SEARCH_REGEXP.ADDRESS, message: 'invalid data format' },
          })}
          error={!!errors.City}
        />
        <TextField
          label={errors.State ? errors.State.message || 'State' : 'State'}
          variant="outlined"
          size={'small'}
          {...register('State', {
            required: true,
            pattern: { value: SEARCH_REGEXP.LETTERS, message: 'invalid data format' },
          })}
          error={!!errors.State}
        />
      </Box>
      <Box sx={{ m: 2, display: 'flex', justifyContent: 'space-between', gap: 2 }}>
        <TextField
          label={errors.ZipCode ? errors.ZipCode.message || 'ZipCode' : 'ZipCode'}
          variant="outlined"
          size={'small'}
          {...register('ZipCode', {
            required: true,
            pattern: { value: SEARCH_REGEXP.NUMBERS, message: 'invalid data format' },
          })}
          error={!!errors.ZipCode}
          sx={{ width: '250px' }}
        />
        <TextField
          label={'Area'}
          select
          defaultValue=""
          variant="outlined"
          size={'small'}
          {...register('Area', { required: true })}
          error={!!errors.Area}
          sx={{ width: '250px' }}
        >
          {area.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Paper>
  )
}
