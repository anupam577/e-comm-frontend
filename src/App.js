import Nav from './components/Nav.js'
import './App.css';
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp.js';
import PrivateComponent from './components/PrivateComponent.js';
import Login from './components/Login.js';
import  AddProduct from './components/AddProduct'
import ProductList from './components/ProductList.js';
import UpdateProduct from './components/UpdateProduct.js';
function App() {
  return (

    <div className="App">
      <BrowserRouter>

         
         <Nav />

        <Routes>

          <Route element={<PrivateComponent/>}>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/add" element={<AddProduct/>}/>
          <Route path="/update/:id" element={<UpdateProduct/>}/>
          <Route path="/logout" element={<h1> logout component</h1>}/>
          <Route path="/profile" element={<h1>profie component</h1>}/>

          </Route>
           
          <Route path ="/signup"element={<SignUp/>}/>
          <Route path="/login" element ={<Login/>}/>
      </Routes>
    </BrowserRouter>
       <Footer/>
    </div >
  );
}

export default App;
