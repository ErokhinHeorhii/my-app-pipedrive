import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://heorhii-sandbox.pipedrive.com/v1',
})

const deal = {
  title: 'Deal from WB for TEST',
  user_id: `${process.env.REACT_APP_USER_ID}`,
}

export type DataType = {
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
}
export const pipeDriveApi = {
  setData(data: DataType) {
    return instance.post<any>(`/deals?api_token=${process.env.REACT_APP_API_TOKEN}`, {
      ...data,
      ...deal,
    })
  },
}
