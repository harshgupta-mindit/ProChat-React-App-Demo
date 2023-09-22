import React, { useContext } from 'react';
import "./Login.css"

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

import { useNavigate, Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { loginStatus } from '../../functions/authStatus';
import { setInLocal } from '../../functions/localStorage';

import { LoginContext } from '../../App'

const Login = () => {

  const navigate = useNavigate();
  const {setUserInfo} = useContext(LoginContext);

  const loginUserFunc = async (values) => {

    const result = await loginStatus(values.email, values.password);

    if (result.message === "success") {
      setInLocal("auth-token", result.data.data.accessToken);
      setInLocal("userInfo", result.data.data.user, true);
      setUserInfo({...result.data.data.user});
      toast.success('Login Success 👍, Redirecting to Login...', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log("logged in by database : ", result)
      setTimeout(() => {
        navigate('/products')
      }, 2000);
      // navigate('/products')

    }
    else {
      console.log("An error occured : ", result.err)
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
    }



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