import React, { useState } from 'react';
import wsp from '../../../static/wsp.png';
import styles from './CardProduct.module.css'

export const CardProduct = ({name, price, category,image }) => {

    const [active, setActive] = useState()

    const liked = () => {
        setActive(!active)
    }
  return (
      <div className={styles.wrapper}>
          <div className={styles.image}>
              <img src={image} alt="" />
              <span onClick={() => liked()}>
                  <i className={`fa-solid fa-heart ${active && styles.liked}`}></i>
              </span>
          </div>
          <div className={styles.info}>
              <h4>{name}</h4>
              <p>${price}</p>
              {
                  category === 'espejo' &&
                  <p>Envio gratis <i className="fa-solid fa-truck-fast"></i></p>
              }
              <div className={styles.shop}>
                  <p>Categoría: {category}</p>
                  <a href={`https://api.whatsapp.com/send?phone=541123787746&text=hola,%20qué%20tal?%Quisiera%reservar%este%producto:%20${name}`} target='_blank' rel='noreferrer'><img src={wsp} alt="" /></a>
              </div>
          </div>
      </div>
  )
}
