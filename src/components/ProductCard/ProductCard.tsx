'use client'

import { useCallback } from 'react'
import Image from 'next/image'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/navigation'

import type { ProductCardProps } from './ProductCard.types'

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter()

  const navigateToCard = useCallback(
    (cardId: number) => router.push(`/electronics/${cardId}`),
    [router],
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
          onClick={() => navigateToCard(product.id)}
        >
          Открыть
        </Button>
      </CardActions>
    </Card>
  )
}
