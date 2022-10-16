import React from 'react'
import styles from './Icons.module.css'

export const Icons = () => {
  return (
      <div className={styles.redes_container}>
          <span>Nuestras redes sociales: </span>
          <ul>
              <li><a href="https://www.instagram.com/eureka_arte_" className={styles.instagram}><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://api.whatsapp.com/send?phone=541123787746&text=hola,%20qué%20tal?" className={styles.whatsapp}><i className="fab fa-whatsapp"></i></a></li>
          </ul>
      </div>
  )
}
