import React from 'react'
import { Icons } from './Icons'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <div className={styles.main}>
      <form action="https://formsubmit.co/adriramone90@gmail.com" method="post">
        <div className="form-floating mb-3 w-100">
          <input type="text" className="form-control" id="floatingInput" placeholder="Ingrese su nombre" name="name" />
            <label htmlFor="floatingInput">Nombre</label>
        </div>
        <div className="form-floating mb-3 w-100">
          <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" name="email" />
            <label htmlFor="floatingEmail">Email</label>
        </div>
        <div className="form-floating mb-3 w-100">
          <textarea className="form-control" name="message" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
          <label htmlFor="floatingTextarea2">Comments</label>
        </div>
        <button type="submit" className="btn mb-3 btn-outline-primary w-100">Enviar</button>
        <Icons />
      </form>
    </div>
  )
}
