import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./Login.css"
import { useNavigate ,Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as Yup from "yup";
import axios from 'axios';

const Login = () => {

  const navigate = useNavigate();

  const loginUserFunc = async (values) => {
    await axios.get("http://localhost:8000/login", {
      params : {
        ...values
      }
    })
      .then((data) => {
        toast.success('Login Success 👍, Redirecting to Login...', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.log("logged in by database : ", data)
        setTimeout(() => {
          navigate('/products')
        }, 4000);
      })
      .catch((err) => {
        console.log("An error occured : ", err)
        toast.error('An Error occured 🤷‍♀️', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
  }


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
              password: Yup.string().required("Password is required").min(8, "Must be greater than 8 characters"),
            })}

            onSubmit={async (values) => {
              console.log(values);
              loginUserFunc(values);
            }}
          >
            <Form className='login-form'>
              <Field className='login-email-input' type="email" name="email" placeholder="Enter Email" />
              <ErrorMessage style={{ color: "#D80032" }} component="label" name="email" />
              <Field className='login-password-input' type="password" name="password" placeholder="Enter Password" />
              <ErrorMessage style={{ color: "#D80032" }} component="label" name="password" />

              <button className='login-submit-btn' type="Submit">Log In</button>
            </Form>
          </Formik>
          <p style={{ textAlign: 'center', marginTop: "30px" }}>Don't have an account ? <Link to='/signup' style={{ color: '#D80032' }} >Sign Up</Link></p>

        </div>
      </div>

      <ToastContainer />
    </>
  )
}

export default Login