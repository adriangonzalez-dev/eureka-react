import React from 'react'
import styles from './Card.module.css'

export const Card = ({name, image, price}) => {
  return (
    <div className={styles.profile_card}>
      <img src={image} alt={name}/>
      <div className={styles.info} id="info">
          
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.price}>${price}</p>
      </div>
      
    </div>
  )
}
