import React, { Component } from 'react';
import Layout from './pages/Layout';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import About from './components/About';
import PokeList from './components/PokeList';
import Home from './components/Home';
import PokeSingle from './components/PokeSingle';


const RouterWrapper =(props) =>{
  const params = useParams();

  return <PokeSingle params={params} {...props}/> // note that the ...props  is passing noting but note you can use it to pass data to the pokeSingle.

}


class App extends Component {
  render() {
    return (
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokelist" element={<PokeList />} />
          <Route path="pokelist/:pokesingle" element={<RouterWrapper />} />
          <Route path="about" element={<About />} />
          
        </Route>
      </Routes>
        
      </BrowserRouter>
    )
  }
}

export default App
