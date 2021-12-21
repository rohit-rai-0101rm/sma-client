import React from 'react';
import {Routes,Route,useNavigate} from 'react-router-dom'
import './App.css';
import { Login } from './components';
import { Home } from './pages';

function App() {
  return (
  <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/*" element={<Home/>}/>

  </Routes>
  );
}

export default App;
