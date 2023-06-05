import React from 'react'

import { Box, Button, MenuItem, Paper, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'

import { area } from '../constant/area'
import { jobSource } from '../constant/jobSource'
import { jobType } from '../constant/jobType'
import { SEARCH_REGEXP } from '../constant/regex'

export const ServiceLocation = () => {
  type FormData = {
    Address: string
    City: string
    State: string
    ZipCode: string
    Area: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Paper elevation={3} sx={{ m: 2, height: 300 }}>
        <Typography sx={{ ml: 2 }} variant="h6">
          Service location
        </Typography>
        <Box sx={{ m: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label={'Address'}
            variant="outlined"
            size={'small'}
            {...register('Address', { required: true, pattern: SEARCH_REGEXP.ADDRESS })}
            error={!!errors.Address}
          />
          <TextField
            label={'City'}
            variant="outlined"
            size={'small'}
            {...register('City', { required: true, pattern: SEARCH_REGEXP.ADDRESS })}
            error={!!errors.City}
          />
          <TextField
            label={'State'}
            variant="outlined"
            size={'small'}
            {...register('State', { required: true, pattern: SEARCH_REGEXP.ADDRESS })}
            error={!!errors.State}
          />
        </Box>
        <Box sx={{ m: 2, display: 'flex', justifyContent: 'space-between', gap: 2 }}>
          <TextField
            label={'Zip code'}
            variant="outlined"
            size={'small'}
            {...register('ZipCode', { required: true, pattern: SEARCH_REGEXP.NUMBERS })}
            error={!!errors.ZipCode}
            sx={{ width: '250px' }}
          />
          <TextField
            label={'Area'}
            select
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
      <Button type="submit">Submit</Button>
    </form>
  )
}
