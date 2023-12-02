import CatalogErrorPage from '@App/(catalog)/error'

import Product from '@Components/Product/Product'
import ModalLayout from '@Components/ModalLayout/ModalLayout'

import type { PropsWithParams } from '@Domain/PropsWithParams'

import { ElectronicsService } from '@Services/ElectronicsService'

export async function generateStaticParams() {
  const products = await ElectronicsService.getElectronicsAll()

  if (products instanceof Error) {
    return <CatalogErrorPage error={products.message} />
  }

  return products.map((product) => ({ id: product.id.toString() }))
}

export default async function ElectronicProductModal({
  params,
}: PropsWithParams<'id'>) {
  const response = await ElectronicsService.getElectronicProductById(+params.id)

  if (response instanceof Error) {
    return <CatalogErrorPage error={response.message} />
  }

  return (
    <ModalLayout
      isOpened
      canGoBack
    >
      <Product product={response} />
    </ModalLayout>
  )
}
