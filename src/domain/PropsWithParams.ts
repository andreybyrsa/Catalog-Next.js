interface PropsWithParams<KeyType extends string> {
  params: {
    [key in KeyType]: string
  }
}

export type { PropsWithParams }
