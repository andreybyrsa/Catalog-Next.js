import type { PropsWithChildren } from 'react'

interface CatalogLayoutProps extends PropsWithChildren {
  modal: React.ReactNode
}

interface CatalogErrorPageProps {
  error: string
}

export type { CatalogLayoutProps, CatalogErrorPageProps }
