import React, { useState } from 'react'
import { Icons } from './Icons'
import styles from './Contact.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export const Contact = () => {
  const [values, setValues] = useState({name:'',email:'',message:''})
  const {name,email, message} = values;

  const handleValues = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
  }

  return (
    <div className={styles.main}>
       <form
       action="https://formsubmit.co/adriramone90@gmail.com"
       method="post"
       className={styles.form}
       onSubmit={handleSubmit}>

        <h1>Contactanos!</h1>

        <TextField
        id="filled-basic"
        label="Nombre"
        variant="filled"
        name='name'
        value={name}
        onChange={handleValues}/>

        <TextField id="filled-basic"
        label="Email"
        variant="filled"
        name='email'
        value={email}
        onChange={handleValues}/>

        <TextField
          id="filled-multiline-static"
          label="Dejanos tu mensaje..."
          multiline
          rows={4}
          defaultValue={message}
          name='message'
          variant="filled"
          onChange={handleValues}
        />

        <Button variant="contained" type='submit'>Enviar</Button>
        <Icons />
      </form>
    </div>
  )
}
