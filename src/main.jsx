import React,  { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Search from './pages/SearchPage/Search.jsx';
import Favorites from './pages/Favorites/Favoritos.jsx';
import WatchLater from './pages/watchLater/SuaLista.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/' element={<Home />}/>
          <Route path='favoritos' element={<Favorites/>}/>
          <Route path='SuaLista' element={<WatchLater />}/>
          <Route path='search' element={<Search />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
