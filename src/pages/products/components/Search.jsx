import React from 'react'
import styles from './Search.module.css'

export const Search = ({handleChange, search, handleSubmit}) => {

  return (
        <form onSubmit={handleSubmit } className={styles.form}>
        <div className={styles.div}>
            <input 
            type="text" 
            value={search} 
            onChange={(e)=>handleChange(e.target.value)}
            className={styles.input}/>
                <label 
                htmlFor=""
                className={styles.label}>Buscar</label>
        </div>
    </form >
  )
}
