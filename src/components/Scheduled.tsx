import React from 'react'

import { Box, Button, MenuItem, Paper, TextField, Typography } from '@mui/material'
import { TimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider'
import { Controller, useForm } from 'react-hook-form'

import { testSelect } from '../constant/testSelect'
import { convertDate, convertTime } from '../helpers/converter'

export const Scheduled = () => {
  type FormData = {
    StartDate: string
    StartTime: string
    EndTime: string
    TestSelect: string
  }

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    // convertDate(data.StartDate)
    console.log(
      'data',
      convertDate(data.StartDate.valueOf()),
      convertTime(data.StartTime.valueOf()),
      convertTime(data.EndTime.valueOf())
    )
  }

  console.log('errors', errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Paper elevation={3} sx={{ m: 2, height: 300 }}>
        <Typography sx={{ ml: 2 }} variant="h6">
          Service location
        </Typography>
        <Box sx={{ m: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              control={control}
              {...register('StartDate', { required: true })}
              // error={!!errors.StartDate}
              render={({ field }) => <DatePicker {...field} label={'Start date'} />}
            />
          </LocalizationProvider>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Controller
                control={control}
                {...register('StartTime', { required: true })}
                // error={!!errors.StartTime}
                render={({ field }) => <TimePicker {...field} label={'Start time'} />}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Controller
                control={control}
                {...register('EndTime', { required: true })}
                // error={!!errors.StartTime}
                render={({ field }) => <TimePicker {...field} label={'End time'} />}
              />
            </LocalizationProvider>
          </Box>
          <TextField
            label={'Test select'}
            select
            variant="outlined"
            size={'small'}
            {...register('TestSelect', { required: true })}
            error={!!errors.TestSelect}
          >
            {testSelect.map((option, index) => (
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
