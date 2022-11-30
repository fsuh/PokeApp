import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'



const PokeSingle = () => {

  const params = useParams();
  const navigate = useNavigate()
  const [data, setData] =useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(()=>{
    setIsLoading(true)

    axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokesingle}`)
    .then((res) =>{
      setData(res.data);
      setIsLoading(false);
    })
    
  },[])
  console.log(data)

  if (isLoading){
    return <p>Loading...</p>
  }



  return (
    <div>
      <h3>{data.name}</h3>
      <img src={data.sprites?.other.dream_world.front_default}
      alt={data.name} />

      <button onClick={() => navigate(-1)}>Go Back</button>

      </div>
  );
}

export default PokeSingle



