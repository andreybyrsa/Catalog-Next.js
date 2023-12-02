import LeftSideBar from '@Components/LeftSideBar/LeftSideBar'

import type { CatalogLayoutProps } from './Catalog.types'
import styles from './CatalogLayout.module.scss'

export default function ElectronicsLayoutPage({
  children,
  modal,
}: CatalogLayoutProps) {
  return (
    <main className={styles['catalog-layout']}>
      <div className={styles['catalog-layout__left-side-bar']}>
        <LeftSideBar />
      </div>

      <div className={styles['catalog-layout__content']}>
        {children}
        {modal}
      </div>
    </main>
  )
}
