import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./Recipes.css";
import { Card, Image, CardBody, Stack,Text } from '@chakra-ui/react'
const Protien = () => {
    const[protein,setProtein]=useState([]);
    useEffect(()=>{
        getProtein();
    },[])
    const getProtein=async()=>{
        const check=localStorage.getItem("protein");
        if(check){
            setProtein(JSON.parse(check));
        }else{
            const api=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=fa43cb3d8777455f905954e3d7a9cd52&minProtein=70&number=10`);
            const data=await api.json();
            localStorage.setItem("protein",JSON.stringify(data.results))
            setProtein(data.results);
        }       
    }
    return (
        <div className="container">
            <Splide options={{
                perPage:4,
                arrows:true,
                pagination:false,
                drag:"free",
                gap:"4rem"
            }}>
            {protein.map((recipe)=>{
                return( 
                    <SplideSlide key={recipe.id}>
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
                    </div>
                    </Link>
                    </SplideSlide>)
            })}
            </Splide>
        </div>
      )
}

export default Protien