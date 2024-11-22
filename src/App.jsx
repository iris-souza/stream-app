import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from "./elements/Navbar"
import { MovieListProvider } from './context/context';

function App() {
  return(
    <MovieListProvider>
      <Navbar/>
      <Outlet/>
    </MovieListProvider>
  );
}

export default App
