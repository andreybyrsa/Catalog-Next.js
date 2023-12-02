import Link from 'next/link'
import { Button, Stack } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'

import CatalogErrorPage from '@App/(catalog)/error'

import Product from '@Components/Product/Product'

import type { PropsWithParams } from '@Domain/PropsWithParams'

import { ElectronicsService } from '@Services/ElectronicsService'

export async function generateStaticParams() {
  const products = await ElectronicsService.getElectronicsAll()

  if (products instanceof Error) {
    return <CatalogErrorPage error={products.message} />
  }

  return products.map((product) => ({ id: product.id.toString() }))
}

export default async function ElectronicProductPage({
  params,
}: PropsWithParams<'id'>) {
  const response = await ElectronicsService.getElectronicProductById(+params.id)

  if (response instanceof Error) {
    return <CatalogErrorPage error={response.message} />
  }

  return (
    <main>
      <Stack
        sx={{ p: 2 }}
        spacing={2}
        alignItems="flex-start"
      >
        <Button
          variant="outlined"
          startIcon={<ArrowBack />}
        >
          <Link href="/electronics">Вернуться назад</Link>
        </Button>

        <Product product={response} />
      </Stack>
    </main>
  )
}
