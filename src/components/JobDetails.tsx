import React from 'react'

import { Box, Button, MenuItem, Paper, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'

import { jobSource } from '../constant/jobSource'
import { jobType } from '../constant/jobType'

export type JobDetailsType = {
  JobType: string
  JobSource: string
  JobDescription: string
}
export type PropsType = {
  register: any
  errors: any
}
export const JobDetails = ({ register, errors }: PropsType) => {
  return (
    <Paper elevation={3} sx={{ m: 2, height: 230 }}>
      <Typography sx={{ ml: 2 }} variant="h6">
        Job details
      </Typography>
      <Box sx={{ m: 2, display: 'flex', justifyContent: 'space-between', gap: 2 }}>
        <TextField
          label={'Job type'}
          select
          defaultValue=""
          variant="outlined"
          size={'small'}
          {...register('JobType', { required: true, pattern: /[^0-9]+$/i })}
          error={!!errors.JobType}
          sx={{ width: '250px' }}
        >
          {jobType.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label={'Job source'}
          select
          defaultValue=""
          variant="outlined"
          size={'small'}
          {...register('JobSource', { required: true, pattern: /[^0-9]+$/i })}
          error={!!errors.JobSource}
          sx={{ width: '250px' }}
        >
          {jobSource.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box sx={{ m: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label={'Job description (optional)'}
          variant="outlined"
          size={'small'}
          multiline
          rows={4}
          {...register('JobDescription', { pattern: /[A-Za-zА-Яа-я]+$/i })}
          error={!!errors.JobDescription}
        />
      </Box>
    </Paper>
  )
}
