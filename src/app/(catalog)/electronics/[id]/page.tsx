import { Button, Stack } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import Link from 'next/link'

import CatalogErrorPage from '@App/(catalog)/error'

import Product from '@Components/Product/Product'

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

export default function ElectronicProductPage({
  params,
}: PropsWithParams<'id'>) {
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

        <Product product={mocks.electronics[0]} />
      </Stack>
    </main>
  )
}
