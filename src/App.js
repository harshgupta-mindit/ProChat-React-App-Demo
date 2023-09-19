import './App.css';


import NavbarMenu from './components/Navbar/Navbar';

import Home from './pages/home/Home';

function App() {

  return (
    <div className="App">

      <NavbarMenu />

      <Home/>
      
    </div>
  );
}

export default App;
