import CatalogErrorPage from '@App/(catalog)/error'

import { GardenService } from '@Services/GardenService'

export default async function GardenPage() {
  const errorMessage = 'Извините, произошла ошибка, попробуйте еще раз'
  const response = await GardenService.getGardenAll().then(
    () => new Error(errorMessage),
  )

  if (response instanceof Error) {
    return <CatalogErrorPage error={response.message} />
  }

  return null
}
