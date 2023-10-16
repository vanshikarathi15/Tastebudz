import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Recipes from './Recipes';
import Restaurants from './Restaurants';
import CuisinesType from './CuisinesType';
import SearchRecipe from './SearchRecipe';
import SearchRestaurants from './SearchRestaurants';
import Description from './Description';
import DisplayRestaurant from './DisplayRestaurant';
const Routing = () => {
  return (
    
   <>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/recipes/" element={<Recipes />}></Route>
        <Route path="/recipes/cuisines/:type" element={<CuisinesType />}></Route>
        <Route path='/search/:search' element={<SearchRecipe/>}></Route>
        <Route path='/displayrestaurant/:restaurantId' element={<DisplayRestaurant/>}></Route>
        <Route path='/searchrestaurants/' element={<SearchRestaurants/>}></Route>
        <Route path='/description/:id' element={<Description/>}></Route>
        <Route path="/restaurants" element={<Restaurants />}></Route>
        </Routes>
        </>
  )
}

export default Routing