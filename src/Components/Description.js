import React,{useState,useEffect} from 'react';
import {  useParams ,Link} from 'react-router-dom';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./Recipes.css";
import { CircularProgress } from '@chakra-ui/react';
import { boxShadow, Card, CardBody, Stack,Text } from '@chakra-ui/react';

function Description() {
    const[description,setDescription]=useState({});
    const [isLoading, setIsLoading] = useState(false);
    const[similar,setSimilar]=useState([]);
    let params=useParams();
    const getSearch=async(name)=>{
      setIsLoading(true);
    const data=await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=fa43cb3d8777455f905954e3d7a9cd52`);
    setIsLoading(false);
    const recipes=await data.json();
    console.log(recipes)
    setDescription(recipes);
  };
  const getSimilar=async(name)=>{
    const data2=await fetch(`https://api.spoonacular.com/recipes/${params.id}/similar?apiKey=fa43cb3d8777455f905954e3d7a9cd52&number=4`);
    const similarRecipes=await data2.json();
    console.log(similarRecipes)
    setSimilar(similarRecipes);
  };
  useEffect(()=>{
    getSearch(params.id);
    getSimilar(params.id);
  },[params.id]);
  return (
    <div className="container ">
       <div className="row recipeDesc " key={description.id} >
       {isLoading && <CircularProgress className="loader" color='blue.400' isIndeterminate  />}
          <h3>{description.title}</h3>
          <img boxShadow='lg' src={description.image} alt={description.title}></img>
          <h5 dangerouslySetInnerHTML={{__html:description.summary}}></h5>
          <h3>RECIPE </h3>
          <h5 dangerouslySetInnerHTML={{__html:description.instructions}}></h5>
          <h3>Similar Recipes</h3>
        </div>
        
        <Splide options={{
                perPage:3,
                arrows:false,
                pagination:false,
                drag:"free",
                gap:"4rem"
            }}>
        {similar.map((item)=>{
        return(
        // <Link to={`/description/${item.id}`}>
        // <div key={item.id} >
            
        // <h4>{item.title}</h4>
        // </div></Link>
        <SplideSlide key={item.id}>
            <Link to={`/description/${item.id}`}>
                    <div key={item.id}>
                    <Card maxW='sm' variant="filled" className="hovering">
                    <CardBody>
                    <Stack mt='6' spacing='3' className="textHeight">
                    <Text align="center" color='blue.600' >
                    {item.title}
                    </Text>
                    </Stack>
                    </CardBody>
                    </Card>
                    </div>
            </Link>
          </SplideSlide>
        )
        
      })}</Splide>
    </div>
    

    
  )
}

export default Description