import CatalogErrorPage from '@App/(catalog)/error'

import Product from '@Components/Product/Product'
import ModalLayout from '@Components/ModalLayout/ModalLayout'

import type { PropsWithParams } from '@Domain/PropsWithParams'

import { ElectronicsService } from '@Services/ElectronicsService'

import { mocks } from '@Utils/mocks'

export async function generateStaticParams() {
  const products = await ElectronicsService.getElectronicsAll()

  if (products instanceof Error) {
    return <CatalogErrorPage error={products.message} />
  }

  return products.map((product) => ({ id: product.id.toString() }))
}

export default function ElectronicProductModal({
  params,
}: PropsWithParams<'id'>) {
  return (
    <ModalLayout
      isOpened
      canGoBack
    >
      <Product product={mocks.electronics[0]} />
    </ModalLayout>
  )
}
