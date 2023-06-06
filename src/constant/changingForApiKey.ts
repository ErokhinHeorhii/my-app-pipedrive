export type changingForApiKeyType = {
  Address: string
  Area: string
  City: string
  Email: string
  Phone: string
  EndTime: string
  FirstName: string
  JobSource: string
  JobType: string
  JobDescription: string
  SecondName: string
  StartDate: string
  StartTime: string
  State: string
  TestSelect: string
  ZipCode: string
}
export type FolderKey = keyof changingForApiKeyType
export const KEY_END_TIME = 'ea934511e2566ddf79b74d7e5a692dc27da31e94'
export const KEY_START_TIME = '6e5d2daf68bdf1ffddbb1e9ee9e3e425a643ec47'

export const KEY_START_DATE = '6a0e72d504e00c0b99d2f568621cc8139c59c4d6'

export const ChangingForApiKey: changingForApiKeyType = {
  FirstName: '7fe90984f122fac6e408c2692e447728e2bf29f1',
  SecondName: '08904e046b5d821007f0c6341f81d02d8c1bde51',
  Phone: '22dd8d675d4d435740101f24ecf5ebc74cdf3f06',
  Email: 'fa959e0170b1648dfda8974483a19bc16a73f46b',
  JobType: '4023e9b4fb41d9d21dd96c87dee4052a3199c873',
  JobSource: '4c3036015c1fd28a44f3812548b82f2ef5b7f91a',
  JobDescription: '50855db0e43e8b2b75133bf0794a499ef7b50c98',
  Address: 'f09610aad930ddf57ef36c792b5cbb79095a9fd5',
  City: '26fb8f507901bb0eb909ada39f4cfc78e546a7cc',
  State: 'ca032760797cb80fc1c0faa5975fca4094b72fca',
  ZipCode: '9a88d0e75127c2fe8faaf723a91ad136d5e42d20',
  Area: 'b73b31e95f877066edcbdf69b626526941d896de',
  StartDate: KEY_START_DATE,
  StartTime: KEY_START_TIME,
  EndTime: KEY_END_TIME,
  TestSelect: '5a294772864cc006e6ce48498c94a9d5e6c33d27',
}
