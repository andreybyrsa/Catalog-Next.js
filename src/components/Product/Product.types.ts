import type { Product } from '@Domain/Product'

interface ProductProps {
  product: Product
}

interface AccordionItem {
  id: number
  title: string
  key: keyof Product
}

export type { ProductProps, AccordionItem }
