import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./Login.css"
import { Link } from 'react-router-dom';

import * as Yup from "yup";

const Login = () => {
  return (
    <>
      <div className="login-main">
        <div className="login-body">
          <h1 className='login-h1'>Log-in</h1>

          <Formik
            initialValues={{
              email: "",
              password: ""
            }}

            validationSchema={Yup.object({
              email: Yup.string().email("Must be a valid email").required("Email is required"),
              password: Yup.string().required("Password is required").min(8,"Must be greater than 8 characters"),
            })}

            onSubmit={async (values) => {
              console.log(values);
            }}
          >
            <Form className='login-form'>
              <Field className='login-email-input' type="email" name="email" placeholder="Enter Email" />
              <ErrorMessage style={{color:"#D80032"}} component="label" name="email" />
              <Field className='login-password-input' type="password" name="password" placeholder="Enter Password" />
              <ErrorMessage style={{color:"#D80032"}} component="label" name="password" />

              <button className='login-submit-btn' type="Submit">Log In</button>
            </Form>
          </Formik>
          <p style={{ textAlign: 'center', marginTop: "30px" }}>Don't have an account ? <Link to='/signup' style={{ color: '#D80032' }} >Sign Up</Link></p>

        </div>
      </div>
    </>
  )
}

export default Login