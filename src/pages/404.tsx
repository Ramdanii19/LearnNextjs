import React from 'react'
import styles from '@/styles/404.module.scss'

const Custom404 = () => {
  return (
    <div className={styles.error}>
      <img src="/404.svg" alt="404" className={styles.error_img} />
      <div className="">Halaman Tidak Tersedia</div>
    </div>
  )
}

export default Custom404