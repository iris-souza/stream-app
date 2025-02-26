import React from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './elements/header/header'
import { MovieListProvider } from './context/context';

function App() {
  return(
    <MovieListProvider>
      <Header/>
      <Outlet/>
    </MovieListProvider>
  );
}

export default App
