'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowBack } from '@mui/icons-material'
import { Stack, Button } from '@mui/material'

import Product from '@Components/Product/Product'

import type { ProductPageProps } from './ProductPage.types'

export default function ProductPage({ product }: ProductPageProps) {
  const router = useRouter()
  const navigateBack = useCallback(() => router.back(), [router])

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
          onClick={navigateBack}
        >
          Вернуться назад
        </Button>

        <Product product={product} />
      </Stack>
    </main>
  )
}
