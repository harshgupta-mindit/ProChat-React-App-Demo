import './App.css';
import { Routes, Route } from "react-router-dom";

import NavbarMenu from './components/Navbar/Navbar';
import Error from './pages/Error/Error';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/SignUp';
import Products from './pages/products/Products';

import Home from './pages/home/Home';
import SingleProduct from './pages/singleProduct/SingleProduct';

import { createContext, useEffect, useState } from 'react';
import { getFromLocal } from './functions/localStorage';

export const LoginContext = createContext();

function App() {

  const [loginStatus, setLoginStatus] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const checkUserAuth = (values) => {
    console.log("Inside effect", values)
    if (values !== null) {
      setUserInfo(values);
    }
  }

  useEffect(() => {
    checkUserAuth(getFromLocal("userInfo", true));
  }, [])

  return (
    <div className="App">
      <LoginContext.Provider value={{ loginStatus, setLoginStatus, userInfo, setUserInfo }}>

        <NavbarMenu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='products' element={<Products />} >
            <Route path=':productID' element={<SingleProduct />} />
          </Route>

          <Route path='*' element={<Error />} />
        </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
