import type { Product } from '@Domain/Product'

import defineAxios from '@Utils/defineAxios'
import { mocks } from '@Utils/mocks'

const electronicsAxios = defineAxios(mocks.electronics)

function formatProductsByPageId(
  products: Product[],
  pageQuery: string,
  perPageQuery: string,
) {
  const pageId = +pageQuery
  const perPageAmount = +perPageQuery

  const startIndex = perPageAmount * pageId
  const endIndex = perPageAmount * pageId + perPageAmount

  return products.slice(startIndex, endIndex)
}

const getElectronicsAll = async (): Promise<Product[] | Error> =>
  electronicsAxios
    .get('/electronics/all')
    .then(({ data }) => data)
    .catch(({ response }) => {
      const error = response?.data?.error ?? 'Ошибка получения товаров.'
      return new Error(error)
    })

const getElectronicsByQuery = async (
  pageQuery: string,
  perPageQuery: string,
): Promise<Product[] | Error> =>
  electronicsAxios
    .get<Product[]>(
      '/electronics/all',
      {},
      {
        formatter: (products) =>
          formatProductsByPageId(products, pageQuery, perPageQuery),
      },
    )
    .then(({ data }) => data)
    .catch(({ response }) => {
      const error = response?.data?.error ?? 'Ошибка получения товаров.'
      return new Error(error)
    })

const getElectronicProductById = async (id: string): Promise<Product | Error> =>
  electronicsAxios
    .get(`/electronics/${id}`, {}, { params: { id } })
    .then(({ data }) => data)
    .catch(({ response }) => {
      const error = response?.data?.error ?? 'Ошибка получения товара.'
      return new Error(error)
    })

export const ElectronicsService = {
  getElectronicsAll,
  getElectronicsByQuery,
  getElectronicProductById,
}
