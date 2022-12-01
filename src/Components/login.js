import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import Button from '../UI/Button'
import {Formik,Form,Field} from 'formik'

import * as Yup from'yup'
import Header from './Header'

const SignupSchema=Yup.object().shape({
  name: Yup.string('Please enter character!').required('Name is required').min(3,'Name can\'t be less than 3 character').max(30,'Name is too long!'),

  email:Yup.string().email('Enter a email type').required('Email is required'),
  password:Yup.string().required('Please enter password').min(6,'Password can\'t be less than 6 character')
})



const Login = (props) => {
  // const [emailValue, setEmailValue] = useState("");
  // const [passValue, setPassvalue] = useState("");
  const [initialValue]=useState({
    name:'',
    email:'',
    password:''

    })

  let navigate=useNavigate()
  

  // const emailChangeHandle = e =>  setEmailValue(e.target.value)
  // const passwordChangeHandle = e =>  setPassvalue(e.target.value);
  

  const handleFormSubmit = e =>{
  
    // setEmailValue("");
    // setPassvalue("");
    if (e.email === "sandipmondal00@gmail.com" && e.password === "password") {
      navigate('/',true)

    }else{

    }

  };


  

  return (
    <div className={styles.login_details}>
      <Header/>
      <h2>Login Page</h2>
      <Formik validationSchema={SignupSchema} initialValues={initialValue} onSubmit={handleFormSubmit}>

    { (props)  =>{
      
      return (
      <Form>
        <div className={styles.all_fields}>
          <div className={styles.single_field}>
            <Field type='text' name='name' placeholder='Enter name...' /> 
            { props.errors.name &&  <p>{props.errors.name}</p>}
          </div>
          <div className={styles.single_field}>
            <Field type='email' name='email' placeholder='Enter email...' /> 
            { props.errors.email &&  <p>{props.errors.email}</p>}
            </div>

            <div className={styles.single_field}>
            <Field type='password' name='password' placeholder='Enter password...' /> 
            { props.errors.password &&  <p>{props.errors.password}</p>}

          </div>
            <div className={styles.btn_cls}>
            
            <Button  type='submit' className='button_login'>Login</Button>
            </div>


            </div>


    </Form>


    )}}

      


     </Formik>



    </div>
  );
};

export default Login;
