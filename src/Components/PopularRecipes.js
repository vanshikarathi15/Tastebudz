import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./Recipes.css";
import { Card, Image, CardBody, Stack,Text } from '@chakra-ui/react'

const PopularRecipes = () => {
    const[popular,setPopular]=useState([]);
    const splideRef = React.useRef();
    useEffect(()=>{
        getPopular();
    },[])
    const getPopular=async()=>{
        const check=localStorage.getItem("popular");
        if(check){
            setPopular(JSON.parse(check));
        }else{
            const api=await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=fa43cb3d8777455f905954e3d7a9cd52`);
            const data=await api.json();
            localStorage.setItem("popular",JSON.stringify(data.recipes))
            setPopular(data.recipes);
        }       
    }
  return (
    <div className="container">
        <Splide 
        options={{
            perPage:4,
            arrows:true,
            pagination:false,
            drag:"free",
            gap:"4rem"
        }}>
          
        {popular.map((recipe)=>{
            return( 
                <SplideSlide  key={recipe.id} >
                <Link to={`/description/${recipe.id}`}>
                <div key={recipe.id}>
                <Card maxW='sm' variant="filled" className="hovering">
                <CardBody>
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3' className="textHeight">
                    <Text align="center" color='blue.600' >
                    {recipe.title}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
                {/* <img src={recipe.image} alt={recipe.title}></img>
                <p>{recipe.title}</p> */}
                </div>
                </Link></SplideSlide>
                )
        })}
        </Splide>
        
    </div>
  )
}

export default PopularRecipes