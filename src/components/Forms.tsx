import React from 'react'

import { Button, Grid } from '@mui/material'
import { useForm } from 'react-hook-form'

import { convertDate, convertTime } from '../helpers/converter'
import { pipeDriveApi } from '../servises/api'

import { ClientDetails, ClientDetailsType } from './ClientDetails'
import { JobDetails, JobDetailsType } from './JobDetails'
import { Scheduled, ScheduledType } from './Scheduled'
import { ServiceLocation, ServiceLocationType } from './ServiceLocation'

export type FormsType = ClientDetailsType & JobDetailsType & ServiceLocationType & ScheduledType

export const Forms = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormsType>()

  const onSubmit = (data: FormsType) => {
    const startDate = convertDate(data.StartDate.valueOf())
    const startTime = convertTime(data.StartTime.valueOf())
    const endTime = convertTime(data.EndTime.valueOf())

    pipeDriveApi.setData({ ...data, StartDate: startDate, StartTime: startTime, EndTime: endTime })
  }

  console.log(errors)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} sx={{ m: 4, width: '1400px' }}>
          <Grid item xs={5}>
            <ClientDetails register={register} errors={errors} />
          </Grid>
          <Grid item xs={5}>
            <JobDetails register={register} errors={errors} />
          </Grid>
          <Grid item xs={5}>
            <ServiceLocation register={register} errors={errors} />
            <Button type="submit" variant={'outlined'}>
              Submit
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Scheduled register={register} errors={errors} control={control} />
          </Grid>
        </Grid>
      </form>
    </>
  )
}
