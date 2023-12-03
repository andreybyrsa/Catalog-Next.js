'use client'

import { useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'

import type { ProductCardProps } from './ProductCard.types'

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter()
  const pathname = usePathname()

  const navigateToProductPage = useCallback(
    (cardId: string) => {
      if (pathname) {
        router.push(`${pathname}/${cardId}`)
      }
    },
    [router, pathname],
  )

  return (
    <Card sx={{ width: 300 }}>
      <CardContent>
        <Image
          src={product.image}
          alt={`${product.title}-image`}
          width={268}
          height={180}
          priority
        />
        <Typography
          variant="h6"
          gutterBottom
        >
          {product.title}
        </Typography>
        <Typography color="GrayText">{product.description}</Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          onClick={() => navigateToProductPage(product.id)}
        >
          Открыть
        </Button>
      </CardActions>
    </Card>
  )
}
