import React from 'react'
import { Navbar } from './navbar/Navbar'
import logo from '../../static/logo.png'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
    <img src={logo} alt='Logo'/>
    <Navbar/>
    </header>
  )
}
