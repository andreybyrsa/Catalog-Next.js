import CatalogErrorPage from '@App/(catalog)/error'

import ProductPage from '@Pages/ProductPage/ProductPage'

import type { PropsWithParams } from '@Domain/PropsWithParams'

import { ElectronicsService } from '@Services/ElectronicsService'

export async function generateStaticParams() {
  const products = await ElectronicsService.getElectronicsAll()

  if (products instanceof Error) {
    return <CatalogErrorPage error={products.message} />
  }

  return products.map((product) => ({ itemGuid: product.id.toString() }))
}

export default async function ElectronicProductPage({
  params,
}: PropsWithParams<'itemGuid'>) {
  const response = await ElectronicsService.getElectronicProductById(
    params.itemGuid,
  )

  if (response instanceof Error) {
    return <CatalogErrorPage error={response.message} />
  }

  return <ProductPage product={response} />
}
