'use client'

import { useCallback } from 'react'
import Image from 'next/image'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  SxProps,
  Theme,
  Typography,
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

import type { ProductProps, AccordionItem } from './Product.types'

const ProductWrapperStyles: SxProps<Theme> = {
  display: 'flex',
  gap: 1,
}

const accordions: AccordionItem[] = [
  { id: 0, title: 'Описание товара', key: 'description' },
  { id: 1, title: 'Материалы', key: 'materials' },
  { id: 2, title: 'Дата поставки', key: 'deliveryDate' },
]

export default function Product({ product }: ProductProps) {
  const getFormattedDeliveryDate = useCallback(
    (date: Date) =>
      date.toLocaleDateString('ru-Ru', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    [],
  )

  return (
    <Box sx={ProductWrapperStyles}>
      <Image
        src={product.image}
        alt={`${product.title}-image`}
        width={268}
        height={180}
        priority
      />

      <Box>
        <Typography variant="h6">{product.title}</Typography>

        <List>
          {accordions.map(({ id, title, key }) => (
            <Accordion key={id}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>{title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="GrayText">
                  {key === 'deliveryDate'
                    ? getFormattedDeliveryDate(product[key])
                    : product[key]}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </List>

        <Typography color="green">Цена: {product.price} рублей</Typography>
      </Box>
    </Box>
  )
}
