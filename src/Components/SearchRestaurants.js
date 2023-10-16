import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GrLocationPin } from 'react-icons/gr';
import { CircularProgress, Box ,Button} from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

function SearchRestaurants() {
  const[searched,setSearch]=useState([]);
  const [sortedRestaurants, setSortedRestaurants] = useState([]); // State variable for sorted restaurants
  const [sortPreference, setSortPreference] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const getSearch=async()=>{
    setIsLoading(true);
    let lat=localStorage.getItem('lat');
    let lng=localStorage.getItem('lon');
    const data=await fetch(`https://api.spoonacular.com/food/restaurants/search?apiKey=cb8511f4205346bdb703f47a8fa22172&lat=${lat}&lng=${lng}`);
    setIsLoading(false);
    const recipes=await data.json();
    setSearch(recipes.restaurants);
    console.log(recipes.restaurants);
  };
  
  const sortRestaurants = async(preference) => {
    let sortedData = [...searched];
    let lat=localStorage.getItem('lat');
    let lng=localStorage.getItem('lon');
    if (preference === 'rating') {
      setIsLoading(true);
    let highlyRated=await fetch(`https://api.spoonacular.com/food/restaurants/search?apiKey=cb8511f4205346bdb703f47a8fa22172&lat=${lat}&lng=${lng}&sort=rating`);
    setIsLoading(false);
    const ratingRest=await highlyRated.json();
    setSearch(ratingRest.restaurants);
    console.log(ratingRest.restaurants)
    } else if (preference === 'distance') {
      setIsLoading(true);
    let closest=await fetch(`https://api.spoonacular.com/food/restaurants/search?apiKey=cb8511f4205346bdb703f47a8fa22172&lat=${lat}&lng=${lng}&sort=fastest`);
    setIsLoading(false);
    const nearer=await closest.json();
    setSearch(nearer.restaurants);
    console.log(nearer.restaurants);
    } else if (preference === 'cheapest') {
      setIsLoading(true);
    let cheapRest=await fetch(`https://api.spoonacular.com/food/restaurants/search?apiKey=cb8511f4205346bdb703f47a8fa22172&lat=${lat}&lng=${lng}&sort=cheapest`);
    setIsLoading(false);
    const cheaper=await cheapRest.json();
    setSearch(cheaper.restaurants);
    console.log(cheaper.restaurants);
    }
    setSortedRestaurants(sortedData);
    setSortPreference(preference);
  };
  // const sortByTop=async()=>{
  //   setIsLoading(true);
  //   let lat=localStorage.getItem('lat');
  //   let lng=localStorage.getItem('lon');
  //   let highlyRated=await fetch(`https://api.spoonacular.com/food/restaurants/search?apiKey=fa43cb3d8777455f905954e3d7a9cd52&lat=${lat}&lng=${lng}&sort=rating`);
  //   setIsLoading(false);
  //   const ratingRest=await highlyRated.json();
  //   setSearch(ratingRest.restaurants);
  //   console.log(ratingRest.restaurants)
  // }
  useEffect(()=>{
    getSearch();
  },[]);
 
  
  return(
    <div className="container">
      <div className="row">
        <div className="filter-rows">
          <p>Sort By</p>
        <Button colorScheme='facebook' size='sm' onClick={() => sortRestaurants('rating')}>
          Top Rated
        </Button>
        <Button colorScheme='facebook' size='sm' onClick={() => sortRestaurants('cheapest')}>
        Cheapest
        </Button>
        <Button colorScheme='facebook' size='sm' onClick={() => sortRestaurants('distance')}>
        Nearest
        </Button>
        </div>
      {isLoading && <CircularProgress className="loader" color='blue.400' isIndeterminate  />}
      <Accordion  allowMultiple>
        { searched.filter((x)=>{return x.description}).map((item)=>{
        
        return(
          <AccordionItem m={4}>
        <div key={item._id} >
        <AccordionButton >
        <Box as="span" flex='1' textAlign='left' className="restaurant-list" >
        <h3>{item.name}</h3>

        <h4>{item.weighted_rating_value && (parseFloat(item.weighted_rating_value)).toFixed(1)}</h4>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4} className="restaurant-inner">
        <div className="rest-city">
          

        <h6>{item.address.city}</h6>
        <h6>{item.type}</h6>
        </div>
        <p>{item.description}</p>
        </AccordionPanel>
        </div>
        </AccordionItem>)
      })}</Accordion>
      </div>
    </div>
  );
}

export default SearchRestaurants;