import { changingForApiKeyType } from '../constant/changingForApiKey'
import { DataType } from '../servises/api'

export const dataHelper = (obj1: changingForApiKeyType, obj2: DataType) => {
  const entries1 = Object.entries(obj1)
  const entries2 = Object.entries(obj2)
  const swappedEntries = entries1.map((pair, index) => [pair[1], entries2[index][1]])
  const newObj = Object.fromEntries(swappedEntries)

  return newObj
}
