'use client'

import { Card, Skeleton, Stack } from '@mui/material'

export default function ProductCardSkeleton() {
  return (
    <Card sx={{ p: 1, width: 300 }}>
      <Stack spacing={1}>
        <Skeleton
          variant="rounded"
          width="100%"
          height={150}
        />

        <Skeleton
          variant="text"
          width="50%"
          height={30}
        />

        <Stack>
          <Skeleton
            variant="text"
            width="100%"
            height={30}
          />
          <Skeleton
            variant="text"
            width="100%"
            height={30}
          />
        </Stack>

        <Skeleton
          variant="rounded"
          width={100}
          height={35}
        />
      </Stack>
    </Card>
  )
}
