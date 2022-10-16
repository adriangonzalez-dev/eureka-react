import React from 'react';
import principito from '../../static/pincipito.png'
import styles from './Background.module.css'

export const Background = () => {
  return (
    <div className={styles.background}>
        <img src={principito} alt="" />
    </div>
  )
}
