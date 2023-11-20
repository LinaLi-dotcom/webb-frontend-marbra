import React from 'react';
import './App.css';
import Header from './Header';
import HouseList from '../house/HouseList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className='container'>
          <Header subtitle={"Taking care of yourself"}></Header>
          <Routes>
            <Route path="/" element={<HouseList/>}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
