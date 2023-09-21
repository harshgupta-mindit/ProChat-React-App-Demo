import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import "./SignUp.css";
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

  const navigate = useNavigate();

  const signupUser = async (values) => {
    await axios.post("http://localhost:8000/signup", {
      ...values
    }).then(() => {
      toast.success('Sign Up Success 👍, Redirecting to Login...', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

        setTimeout(() => {
          navigate('/login')
        }, 4000);

    }).catch(() => {
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
      <ToastContainer />
      <div className="signup-main">
        <div className="signup-body">
          <h1 className="signup-h1">Sign Up</h1>

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: ""
            }}

            validationSchema={Yup.object({
              name: Yup.string().min(3, "Name must be greater than 3 Characters").required("Name is required"),
              email: Yup.string().email().required("Email is required"),
              password: Yup.string().min(8, "Password Should be greater than 8 character").required("Password is required"),
              confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Password not matched !!!").required("Confirm Password is required")
            })}

            onSubmit={async (values) => {
              console.log(values)
              signupUser(values);
            }}

          >
            <Form className='signup-form'>
              <Field className="signup-input" type="text" name="name" placeholder="Enter Name" />
              <ErrorMessage style={{ color: "#D80032" }} component="label" name="name" />
              <Field className="signup-input" type="text" name="email" placeholder="Enter Email" />
              <ErrorMessage style={{ color: "#D80032" }} component="label" name="email" />
              <Field className="signup-input" type="text" name="password" placeholder="Enter password" />
              <ErrorMessage style={{ color: "#D80032" }} component="label" name="password" />
              <Field className="signup-input" type="text" name="confirmPassword" placeholder="Confirm Password" />
              <ErrorMessage style={{ color: "#D80032" }} component="label" name="confirmPassword" />

              <button className='signup-submit-btn'>Sign Up</button>
            </Form>
          </Formik>

          <p style={{ textAlign: 'center', marginTop: "30px" }}>Already have an account ? <Link to='/login' style={{ textDecoration: 'none', color: "#D80032" }}>Login</Link></p>
        </div>
      </div>
    </>
  )
}

export default SignUp