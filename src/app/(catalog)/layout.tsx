import { PropsWithChildren } from 'react'

import LeftSideBar from '@Components/LeftSideBar/LeftSideBar'

import styles from './CatalogLayout.module.scss'

export default function ElectronicsLayoutPage({ children }: PropsWithChildren) {
  return (
    <main className={styles['catalog-layout']}>
      <div className={styles['catalog-layout__left-side-bar']}>
        <LeftSideBar />
      </div>

      <div className={styles['catalog-layout__content']}>{children}</div>
    </main>
  )
}
