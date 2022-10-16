import React from 'react'
import { Icons } from './icons/Icons'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
    <Icons/>
    <p>Desarrollado por <a href="https://adriangonzalezdev90.netlify.app/">adriangonzalez.dev90</a></p>
</footer>
  )
}
