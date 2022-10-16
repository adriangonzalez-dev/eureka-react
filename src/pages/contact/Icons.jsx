import React from 'react'
import styles from './Icons.module.css'

export const Icons = () => {
  return (
      <div className={styles.redes_container}>
          <span>Nuestras redes sociales: </span>
          <ul>
              <li><a href="/" className={styles.instagram}><i className="fab fa-instagram"></i></a></li>
              <li><a href="/" className={styles.whatsapp}><i className="fab fa-whatsapp"></i></a></li>
          </ul>
      </div>
  )
}
