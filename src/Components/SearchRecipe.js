import React, { useState,useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';

function SearchRecipe() {
  const[searched,setSearch]=useState([]);
  let params=useParams();
  const getSearch=async(name)=>{
    const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=fa43cb3d8777455f905954e3d7a9cd52&query=${name}`);
    const recipes=await data.json();
    setSearch(recipes.results);
  };
  
  useEffect(()=>{
    getSearch(params.search);
  },[params.search])
  return (
    <div>
      {searched.map((item)=>{
        return(
        <Link to={`/description/${item.id}`}>
        <div key={item.id} >
        <img src={item.image} alt={item.title}></img>
        <h4>{item.title}</h4>
        </div></Link>
        )
      })}
    </div>
  )
}

export default SearchRecipe