import React from 'react'
import styles from './Icons.module.css'

export const Icons = () => {
  return (
    <ul className={styles.social_icons}>
    <li>
        <a href="/"><i className="fab fa-whatsapp"></i></a>
    </li>
    <li>
        <a href="/"><i className="fab fa-instagram"></i></a>
    </li>
    <li>
        <a href="/"><i className="fab fa-twitter"></i></a>
    </li>
    <li>
        <a href="/"><i className="fab fa-snapchat"></i></a>
    </li>
</ul>
  )
}
