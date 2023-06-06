export const convertDate = (str: string) => {
  let normalDate = new Date(str).toLocaleString('en-US')

  return normalDate.split(',')[0]
}

export const convertTime = (str: string) => {
  let normalDate = new Date(str).toLocaleString('en-US')

  return normalDate.split(',')[1].trim()
}
