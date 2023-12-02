import { mac, scaner, asustor } from '@Assets/index'

import type { Product } from '@Domain/Product'

interface Mocks {
  electronics: Product[]
  garden: Product[]
}

const electronics: Product[] = [
  {
    id: 0,
    title: 'Ноутбук Macbook Pro 14 ',
    description:
      '14.2" Ноутбук Apple Macbook Pro 14 Late 2021 3024×1964, Apple M1 Pro 3.2 ГГц, RAM 16 ГБ, SSD 512 ГБ, Apple graphics 14-core, macOS, MKGR3.',
    image: mac.src,
    materials:
      'Высококачественная технология разработки: титановый корпус, сапфировый экран, углепластиковые кнопки, лазерная гравировка.',
    deliveryDate: new Date('02.02.2023'),
    price: 200000,
  },
  {
    id: 1,
    title: 'Накопитель ASUSTOR',
    description:
      'Количество слотов для накопителей: 4; Объем оперативной памяти: 1 ГБ; Форм-фактор накопителей: 3.5; Поддержка RAID.',
    image: asustor.src,
    materials:
      'Корпус из пластика, сенсорные кнопки, пластиковые вентиляторы, водостойкая краска, геометрия - параллелепипед.',
    deliveryDate: new Date('02.25.2023'),
    price: 52000,
  },
  {
    id: 2,
    title: 'Сканер CANON CanoScan',
    description:
      'Количество слотов для накопителей 8; Объем оперативной памяти 8 ГБ; Форм-фактор накопителей: 2.5, 2242, 2260, 2280, 3.5.',
    image: scaner.src,
    materials:
      'Закаленное стекло, крышка из твердого пластика, лазерная гравировка логотипов, кнопки выдерживают 5000 нажатий.',
    deliveryDate: new Date('04.20.2023'),
    price: 85000,
  },
]

const garden: Product[] = []

export const mocks: Mocks = {
  electronics,
  garden,
}
