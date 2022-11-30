import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import About from './components/About';
import PokeList from './components/PokeList';
import Home from './components/Home';
import PokeSingle from './components/PokeSingle';

import Layout from './pages/Layout';



const App =() => {
    return (
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokelist" element={<PokeList />} />
          <Route path="pokelist/:pokesingle" element={<PokeSingle />} />
          <Route path="about" element={<About />} />
          
        </Route>
      </Routes>
        
      </BrowserRouter>
    )
  }

export default App
