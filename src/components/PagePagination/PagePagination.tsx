'use client'

import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import { type LabelDisplayedRowsArgs, TablePagination } from '@mui/material'

import { DEFAULT_PAGE_QUERY, DEFAULT_PER_PAGE_QUERY } from '@Domain/variables'

import type { PagePaginationProps } from './PagePagination.types'

function getInitialPerPage(searchParams: ReadonlyURLSearchParams | null) {
  const perPageQuery = searchParams?.get('perPage')

  return perPageQuery ? +perPageQuery : +DEFAULT_PER_PAGE_QUERY
}

export default function PagePagination({
  allProductsSize,
}: PagePaginationProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [rowsPerPage, setRowsPerPage] = useState(() =>
    getInitialPerPage(searchParams),
  )

  const currentPage = useMemo(() => {
    const pageQuery = searchParams?.get('page')

    return pageQuery ? +pageQuery : +DEFAULT_PAGE_QUERY
  }, [searchParams])

  const createQueryString = useCallback(
    (name: string, value: string) => {
      if (searchParams) {
        const params = new URLSearchParams(searchParams)
        params.set(name, value)

        return params.toString()
      }
      return ''
    },
    [searchParams],
  )

  const handlePageChange = useCallback(
    (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      if (pathname) {
        const currentQuery = createQueryString('page', newPage.toString())
        router.push(`${pathname}?${currentQuery}`)
      }
    },
    [router, pathname, createQueryString],
  )

  const handleChangeRowsPerPage = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const targetValue = event.target.value

      if (currentPage * +targetValue < allProductsSize && pathname) {
        const currentQuery = createQueryString('perPage', targetValue)
        router.push(`${pathname}?${currentQuery}`)

        setRowsPerPage(+event.target.value)
      }
    },
    [allProductsSize, currentPage, router, pathname, createQueryString],
  )

  const getLabelDisplayedRows = useCallback(
    ({ from, to, count }: LabelDisplayedRowsArgs) =>
      `${from}–${to} из ${count !== -1 ? count : `больше, чем ${to}`}`,
    [],
  )

  return (
    <TablePagination
      component="div"
      count={allProductsSize}
      page={currentPage}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[1, 2, 3]}
      labelRowsPerPage="Отображать"
      labelDisplayedRows={getLabelDisplayedRows}
      onPageChange={handlePageChange}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  )
}
