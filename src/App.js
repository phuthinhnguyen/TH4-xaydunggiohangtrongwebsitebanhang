import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsList from './components/ProductsList'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart'

function App() {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <hr />
      <ProductsList />
      <hr />
      <Cart />
    </div>
  );

}

export default App;
