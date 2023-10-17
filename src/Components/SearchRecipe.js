import React, { useState,useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';


function SearchRecipe() {
  const[searched,setSearch]=useState([]);
  const [noResults, setNoResults] = useState(false);
  let params=useParams();
  const getSearch=async(name)=>{
    const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=fa43cb3d8777455f905954e3d7a9cd52&query=${name}`);
    const recipes=await data.json();
    setSearch(recipes.results);
    setNoResults(recipes.results.length === 0);
  };
  
  useEffect(()=>{
    getSearch(params.search);
  },[params.search])
  return (
    <div className="container">
       {noResults ? (
        <p className="headingCuisine">No results found for "{params.search}". Please try a different search term.</p>
      ) : (
        <h3 className="headingCuisine">Results for {params.search}</h3>
      )}
      {searched.map((item) => (
          <Link to={`/description/${item.id}`} key={item.id}>
            <div className="row searchedItems hovering">
              <img className="col-md" src={item.image} alt={item.title}></img>
              <h4 className="col-md p-4">{item.title}</h4>
            </div>
          </Link>
        ))}
      
    </div>
  )
}

export default SearchRecipe