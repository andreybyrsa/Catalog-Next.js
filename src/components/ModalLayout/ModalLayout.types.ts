import type { Dispatch, PropsWithChildren, SetStateAction } from 'react'

interface ModalLayoutProps extends PropsWithChildren {
  isOpened: boolean
  setIsOpened?: Dispatch<SetStateAction<boolean>>

  canGoBack?: boolean
}

export type { ModalLayoutProps }
