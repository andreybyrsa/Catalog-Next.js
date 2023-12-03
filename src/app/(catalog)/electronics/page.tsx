import CatalogErrorPage from '@App/(catalog)/error'

import ProductsList from '@Components/ProductsList/ProductsList'

import type { Product } from '@Domain/Product'
import { DEFAULT_PAGE_QUERY, DEFAULT_PER_PAGE_QUERY } from '@Domain/variables'

import { ElectronicsService } from '@Services/ElectronicsService'

import type { ElectronicsPageProps } from './ElectronicsPage.types'

function formatProductsByPageQuery(
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

export default async function ElectronicsPage({
  searchParams,
}: ElectronicsPageProps) {
  const pageQuery = searchParams.page ?? DEFAULT_PAGE_QUERY
  const perPageQuery = searchParams.perPage ?? DEFAULT_PER_PAGE_QUERY

  const response = await ElectronicsService.getElectronicsAll()

  if (response instanceof Error) {
    return <CatalogErrorPage error={response.message} />
  }

  const products = formatProductsByPageQuery(response, pageQuery, perPageQuery)

  return (
    <ProductsList
      products={products}
      allProductsSize={response.length}
    />
  )
}
