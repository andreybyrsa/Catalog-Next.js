import type { PropsWithParams } from '@Domain/PropsWithParams'

interface ElectronicsPageProps extends PropsWithParams<'pageId'> {
  searchParams: {
    page?: string
    perPage?: string
  }
}

export type { ElectronicsPageProps }
