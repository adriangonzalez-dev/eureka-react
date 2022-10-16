import React from 'react'
import styles from './Card.module.css'

export const Card = ({name, image, price}) => {
  return (
    
      <div className={styles.card}>
        <figure>
          <img alt={name} src={image} />
        </figure>
        <div className={styles.contenido_card}>
          <h3>{name}</h3>
          <p className={styles.p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae dolorem itaque iste adipisci</p>
          <a 
          href={`https://api.whatsapp.com/send?phone=541123787746&text=Hola,%20qué%20tal?%20Quisiera%20reservar%20este%20producto:%20${name}`}>
            Reservar
            <i class="fa-brands fa-square-whatsapp">
              </i>
            </a>
        </div>
      </div>
  )
}
