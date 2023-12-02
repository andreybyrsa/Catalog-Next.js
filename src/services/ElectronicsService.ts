import type { Product } from '@Domain/Product'

import defineAxios from '@Utils/defineAxios'
import { mocks } from '@Utils/mocks'

const electronicsAxios = defineAxios(mocks.electronics)

const getElectronicsAll = async (): Promise<Product[] | Error> =>
  electronicsAxios
    .get('/electronics/all')
    .then(({ data }) => data)
    .catch(({ response }) => {
      const error = response?.data?.error ?? 'Ошибка получения товаров.'
      return new Error(error)
    })

export const ElectronicsService = {
  getElectronicsAll,
}
