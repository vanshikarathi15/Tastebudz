import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { CircularProgress,Box } from '@chakra-ui/react';

function CuisinesType() {
  const [cuisine,setCuisine]=useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let params=useParams();
  console.log(process.env.API_KEY);
  const getCuisine=async(name)=>{
    setIsLoading(true);
    const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=fa43cb3d8777455f905954e3d7a9cd52&cuisine=${name}`);
    setIsLoading(false);
    const recipes=await data.json();
    setCuisine(recipes.results);
  };
  useEffect(()=>{
    getCuisine(params.type);
    console.log(params.type);
  },[params.type])
  return (<div className="container">
    {isLoading && <CircularProgress className="loader" color='blue.400' isIndeterminate  />}
    <h3 className="cuisineName">{params.type} CUISINE</h3>
    <div  className="row row-cols-3">
    {cuisine.map((item)=>{
      return(
        
          <div key={item.id} className="col cuisineRecipe " >
          <Box boxShadow='md' p='6' rounded='md' className="hovering">
          <Link to={`/description/${item.id}`}>
          <img src={item.image} alt={item.title}></img>
          <div className="cuisineText">
          <h4 >{item.title}</h4></div></Link>
          </Box>
        </div>
       
      )
    })
  }</div></div>
  )
}

export default CuisinesType;