import './App.css';
import { Routes, Route } from "react-router-dom";

import NavbarMenu from './components/Navbar/Navbar';
import Error from './pages/Error/Error';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/SignUp';
import Products from './pages/products/Products';

import Home from './pages/home/Home';
import SingleProduct from './pages/singleProduct/SingleProduct';

function App() {
  
  return (
    <div className="App">
     
        <NavbarMenu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productID' element={<SingleProduct />} />

          <Route path='*' element={<Error />} />
        </Routes>
    </div>
  );
}

export default App;
