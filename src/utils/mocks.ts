import {
  mac,
  asustor,
  canonScaner,
  boschCoffee,
  DJI,
  HPScaner,
  nivonaCoffee,
  mieleCoffee,
} from '@Assets/index'

import type { Product } from '@Domain/Product'

interface Mocks {
  electronics: Product[]
  garden: Product[]
}

const electronics: Product[] = [
  {
    id: '96afdfba-e5ed-4807-9d4c-0c56da39f027',
    title: 'Ноутбук Macbook Pro 14',
    description:
      '14.2" Ноутбук Apple Macbook Pro 14 Late 2021 3024×1964, Apple M1 Pro 3.2 ГГц, RAM 16 ГБ, SSD 512 ГБ, Apple graphics 14-core, macOS, MKGR3.',
    image: mac.src,
    materials:
      'Высококачественная технология разработки: титановый корпус, сапфировый экран, углепластиковые кнопки, лазерная гравировка.',
    deliveryDate: new Date('02.02.2023'),
    price: 200000,
  },
  {
    id: 'e726f266-a20f-4800-b852-a375cb844856',
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
    id: '2cf39fc2-a295-4644-95f6-0939117b8ca1',
    title: 'Сканер CANON CanoScan',
    description:
      'Количество слотов для накопителей 8; Объем оперативной памяти 8 ГБ; Форм-фактор накопителей: 2.5, 2242, 2260, 2280, 3.5.',
    image: canonScaner.src,
    materials:
      'Закаленное стекло, крышка из твердого пластика, лазерная гравировка логотипов, кнопки выдерживают 5000 нажатий.',
    deliveryDate: new Date('04.20.2023'),
    price: 85000,
  },
  {
    id: '20bfeefd-b43b-4f10-9ec2-14c8862cc8c9',
    title: 'Кофемашина Bosch',
    description:
      'Можно сварить себе не только обычный кофе, но и эспрессо, а также и другие напитки. Встроенная кофемолка SilentCeramDrive.',
    image: boschCoffee.src,
    materials:
      'Кофемашина Bosch CTL836EC6 выполнена в стильном черном цвете с цветным TFT-дисплеем, с закаленным стеклом.',
    deliveryDate: new Date('05.20.2023'),
    price: 96000,
  },
  {
    id: '0274b315-c074-4608-812f-67b99a1df10c',
    title: 'Квадрокоптер DJI Air',
    description:
      'DJI Air 2S получил камеру с 1-дюймовой CMOS-матрицей и большими пикселями в 2,4 мкм. 10-битный цветовой профиль. Скорость полета 140км/ч.',
    image: DJI.src,
    materials:
      'Обновленная камера с большим количеством пикселей и целый комплекс автономных функций. Эти параметры позволяют снимать видео в форматах 5,4K (30 кадров в секунду) и 4K (60 кадров в секунду).',
    deliveryDate: new Date('10.20.2023'),
    price: 101000,
  },
  {
    id: '9f24a543-f834-4646-a224-a45e092abd06',
    title: 'Сканер HP ScanJet Pro',
    description:
      'Этот быстрый и доступный сканер способен справиться с широким спектром задач, от простого цветного сканирования до сложных рабочих процессов.',
    image: HPScaner.src,
    materials:
      'Сканирование одним касанием, сканирование текстов с помощью системы оптического распознавания символов и создание пользовательских профилей, упрощающих и улучшающих управление рабочими процессами.',
    deliveryDate: new Date('11.20.2023'),
    price: 120000,
  },
  {
    id: 'd83b1943-d40a-489e-a9d5-2bf1942fc0fd',
    title: 'Кофемашина Nivona',
    description:
      'Тип используемого кофе молотый / зерновой. Давление помпы 15 бар. Тип напитка капучино, эспрессо. Приготовление капучино автоматическое.',
    image: nivonaCoffee.src,
    materials:
      'Особенности конструкции дисплей, индикатор уровня воды, контейнер для отходов, отсек для шнура, подсветка дисплея, съемный лоток для сбора капель. Материал корпуса пластик.',
    deliveryDate: new Date('12.20.2023'),
    price: 190000,
  },
  {
    id: 'f3fcd407-434f-4eee-80d7-0c567d22b372',
    title: 'Кофемашина Miele',
    description:
      'Автоматическая кофемашина работает с зернами, перемалывая их в конусной мельнице. Отличное качество кофе с системой AromaticSystemFresh.',
    image: mieleCoffee.src,
    materials:
      'Корпусе из нержавеющей стали выполнен в цвете «черный обсидиан». Регулирование всех параметров напитка: крепости, температуры, помола. Память при отключении электричества до 200 ч.',
    deliveryDate: new Date('12.25.2023'),
    price: 103000,
  },
]

const garden: Product[] = []

export const mocks: Mocks = {
  electronics,
  garden,
}
