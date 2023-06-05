import React from 'react'

import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'

import { SEARCH_REGEXP } from '../constant/regex'

export const ClientDetails = () => {
  type FormData = {
    FirstName: string
    SecondName: string
    Phone: number
    Email: string
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
      <Paper elevation={3} sx={{ m: 2, height: 230 }}>
        <Typography sx={{ ml: 2 }} variant="h6">
          Client details
        </Typography>
        <Box sx={{ m: 2, display: 'flex', justifyContent: 'space-between', gap: 2 }}>
          <TextField
            label={'First name'}
            variant="outlined"
            size={'small'}
            sx={{ width: '250px' }}
            {...register('FirstName', {
              required: true,
              pattern: { value: SEARCH_REGEXP.LETTERS, message: 'Please enter a valid data' },
            })}
            error={!!errors.FirstName}
          />
          <TextField
            label={'Second name'}
            variant="outlined"
            size={'small'}
            sx={{ width: '250px' }}
            {...register('SecondName', { required: true, pattern: SEARCH_REGEXP.NOT_NUMBERS })}
            error={!!errors.SecondName}
          />
        </Box>
        <Box sx={{ m: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label={'Phone'}
            variant="outlined"
            size={'small'}
            {...register('Phone', { required: true, pattern: SEARCH_REGEXP.NOT_LETTERS })}
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
      <Button type="submit">Submit</Button>
    </form>
  )
}
