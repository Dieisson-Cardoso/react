import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home, { Teste } from './Home'

import Inicio from './Inicio';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/Teste" element={<Teste />} />
        </Routes>
      </BrowserRouter>,
    </>
  )
}

export default App;
