import React from 'react'
import derquiEmprende from '../../../static/derquiemprende.png'
import mp from '../../../static/mp.png'
import styles from './DivFeria.module.css'

export const DivFeria = () => {
  return (
    <section className={styles.sectionFeria}>
    <div className={styles.feria}>
        <p>Podes encontrarnos en Presidente Derqui participando de Derqui Emprende los viernes y sabados de 13 a 18hs</p>
        <a href="/"><img src={derquiEmprende} alt="" /></a>
    </div>

    <div className={styles.envio}>
        <p>También podes realizarnos pedidos por whatsapp e instagram</p>
        <p>Aceptamos Mercado Pago</p><img src={mp} alt="" />
    </div>
</section>
  )
}
