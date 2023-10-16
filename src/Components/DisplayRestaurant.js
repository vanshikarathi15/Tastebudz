import React, { useState,useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';

function DisplayRestaurant() {
  const[searched,setSearch]=useState([]);
  let params=useParams();
  const getSearch=async(restaurantId)=>{
    const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=fa43cb3d8777455f905954e3d7a9cd52&query=${restaurantId}`);
    const recipes=await data.json();
    setSearch(recipes.restaurants);
    console.log(recipes.restaurants)
  };
  
  useEffect(()=>{
    getSearch(params.restaurantId);
  },[params.restaurantId])
  return (
    <div>
      {searched && searched.map((item)=>{
        return(
       
        <div key={item._id} >
        <img src={item.image} alt={item.name}></img>
        <h4>{item.name}</h4>
        </div>
        )
      })}
    </div>
  )
}

export default DisplayRestaurant;