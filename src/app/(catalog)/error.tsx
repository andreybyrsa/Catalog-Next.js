'use client'

import { Box, Typography } from '@mui/material'

import type { CatalogErrorPageProps } from './Catalog.types'

export default function CatalogErrorPage({ error }: CatalogErrorPageProps) {
  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="h5"
        align="center"
        color="error"
      >
        {error}
      </Typography>
    </Box>
  )
}
