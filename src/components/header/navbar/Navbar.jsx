import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import princ from '../../../static/pincipito.png'


export const Navbar = () => {
    const [active, setActive] = useState(true);
        const activeMenu = () =>{
            setActive(!active)
    }
    
  return (
    <>
    <button onClick={()=>activeMenu()} className={styles.buttonMenu}>
        <i className="fa-solid fa-bars"></i>
    </button>
    
        <nav className={`${styles.nav} ${active ? styles.active : ''}`}>
            <ul>
                <li onClick={()=>activeMenu()}><Link to='/'>Home</Link></li>
                <li onClick={()=>activeMenu()}><Link to='/productos'>Productos</Link></li>
                <li onClick={()=>activeMenu()}><Link to='/contacto'>Contacto</Link></li>
            </ul>
            <img src={princ} alt="" className={styles.princLogo}/>
        </nav>
    </>
  )
}
