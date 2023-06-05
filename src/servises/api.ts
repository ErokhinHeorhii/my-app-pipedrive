import axios, { AxiosResponse } from 'axios'

import { FormsType } from '../components/Forms'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://api.pipedrive.com/v1',
})

export const pipeDriveApi = {
  setData(data: {
    Email: string
    Address: string
    EndTime: string
    FirstName: string
    ZipCode: string
    StartTime: string
    City: string
    SecondName: string
    StartDate: string
    Area: string
    JobType: string
    JobDescription: string
    Phone: number
    State: string
    TestSelect: string
    JobSource: string
  }) {
    return instance.post<any>(`/deals?api_token=d50f74d23e414f2b2dcf4a8f6e7023a71af12bd3`, {
      ...data,
    })
  },
}
