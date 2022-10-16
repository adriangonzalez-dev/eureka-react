import React from 'react'
import logo from '../../static/logo.png'
import { ContainerImages } from './containerimages/ContainerImages'
import { DivFeria } from './divferia/DivFeria'
import styles from './Home.module.css'

export const Home = () => {
  return (
    <main className={styles.main_home}>
        <section>
        <img src={logo} alt=""/>
        <h1>Eureka Arte</h1>
        <h4>Artesanias</h4>
        <p>"Un amor que surja en el contacto con la extrañeza del otro"</p>
        </section>

    <ContainerImages />

    <DivFeria />
    </main>
  )
}
