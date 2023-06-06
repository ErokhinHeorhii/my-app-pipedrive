import React from 'react'

import { Button, Grid } from '@mui/material'
import { useForm } from 'react-hook-form'

import {
  ChangingForApiKey,
  KEY_END_TIME,
  KEY_START_DATE,
  KEY_START_TIME,
} from '../constant/changingForApiKey'
import { convertDate, convertTime } from '../helpers/converter'
import { dataHelper } from '../helpers/dataHelper'
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
    const newObj = dataHelper(ChangingForApiKey, data)

    pipeDriveApi
      .setData({
        ...newObj,
        [KEY_START_DATE]: startDate,
        [KEY_END_TIME]: endTime,
        [KEY_START_TIME]: startTime,
      })
      .then(response => {
        console.log(response.data)
        alert('your request was successful. Go to pipedrive')
      })
      .catch(error => {
        console.log(error)
      })
  }

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
            <Button type="submit" variant={'outlined'} sx={{ m: 2 }}>
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
