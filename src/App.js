import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Compunent/Home';
import Navbar from './Compunent/Navbar';
import Card from './Compunent/Card';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route exact  path='ReduxProject_01' element={<Home/>} ></Route>
    <Route  path='/cart' element={<Card/>} ></Route>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
