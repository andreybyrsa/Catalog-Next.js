import type { Product } from '@Domain/Product'

import defineAxios from '@Utils/defineAxios'
import { mocks } from '@Utils/mocks'

const gardenAxios = defineAxios(mocks.garden)

const getGardenAll = async (): Promise<Product[] | Error> =>
  gardenAxios
    .get('/garden/all')
    .then(({ data }) => data)
    .catch(({ response }) => {
      const error = response?.data?.error ?? 'Ошибка получения товаров.'
      return new Error(error)
    })

export const GardenService = {
  getGardenAll,
}
