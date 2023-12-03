'use client'

import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Stack, SxProps, TextField, Theme, Typography } from '@mui/material'

import ProductCard from '@Components/ProductCard/ProductCard'
import PagePagination from '@Components/PagePagination/PagePagination'

import type { Product } from '@Domain/Product'

import type { ProductsListProps } from './ProductsList.types'

const ProductsWrapperStyles: SxProps<Theme> = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '100%',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: 2,
}

export default function ProductsList({
  products,
  allProductsSize,
}: ProductsListProps) {
  const [clientProducts, setClientProducts] = useState<Product[]>(
    () => products,
  )

  useEffect(() => {
    setClientProducts(products)
  }, [products])

  const handleChangeTextField = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const searchedValue = event.target.value.toLowerCase().trim()

      const currentProducts = products.filter(({ title }) => {
        const productTitile = title.toLowerCase().trim()

        return productTitile.includes(searchedValue)
      })

      setClientProducts(currentProducts)
    },
    [products],
  )

  return (
    <Stack
      sx={{ p: 2 }}
      spacing={2}
      width="100%"
    >
      <Typography variant="h6">Электроника</Typography>

      <TextField
        label="Поиск по названию"
        variant="outlined"
        onChange={handleChangeTextField}
      />

      <Stack
        sx={ProductsWrapperStyles}
        useFlexGap
      >
        {clientProducts.length ? (
          clientProducts.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
            />
          ))
        ) : (
          <Typography>Товаров не найдено</Typography>
        )}
      </Stack>

      <PagePagination allProductsSize={allProductsSize} />
    </Stack>
  )
}
