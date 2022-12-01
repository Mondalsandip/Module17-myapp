import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'
import Button from '../UI/Button'
import Header from './Header'

const Home = () => {
  
  let nav=useNavigate()
const logout=()=>{
    nav('/login',true)
}

  return (
    <section className={styles.home_details}>
     <h1>Login Successful and Welcome.</h1> 
     <Header/>



     
     


     <Button  type='submit' className='button_logout' onClick={logout} >Logout</Button>








    </section>



  )
}

export default Home
