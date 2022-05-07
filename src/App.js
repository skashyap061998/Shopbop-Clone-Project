
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Signin from './Redux/Auth/Signin';
import Register from './Redux/Auth/Register';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
