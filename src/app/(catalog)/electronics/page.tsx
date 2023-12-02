import CatalogErrorPage from '@App/(catalog)/error'

import ProductsList from '@Components/ProductsList/ProductsList'

import { ElectronicsService } from '@Services/ElectronicsService'

export default async function ElectronicsPage() {
  const response = await ElectronicsService.getElectronicsAll()

  if (response instanceof Error) {
    return <CatalogErrorPage error={response.message} />
  }

  return <ProductsList products={response} />
}
