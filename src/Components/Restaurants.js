import React,{useState,useEffect} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { CircularProgress, Box ,Button} from '@chakra-ui/react';
const Restaurants = () => {
  const [input,setInput]=useState('');
  const navigate=useNavigate();
  const [error, setError] = useState('');
  const initialCities=["Newton","Toronto","Lawrence","Greenfield","Chicago",
  "Portland","Monroe","Pittsburg","Burlington","Vancouver","Denver","Houston","Boston","Austin","Tucson"]

  
  // const submitHandler=(e)=>{
  //     e.preventDefault();
  //     if (input.trim() === ''){
  //       setError('Please enter a valid search query.');
  //       return; 
  //     }
  //     setError('');
  //     navigate('/displayrestaurant/'+input)
  // }
  const[searched,setSearch]=useState([]);
  let params=useParams();
  const getSearch=async(name)=>{
    const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=cb8511f4205346bdb703f47a8fa22172&query=${input}`);
    const recipes=await data.json();

    setSearch(recipes.results);
  };
  const searchGeolocation=async(city)=>{
    const info=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=c7c612bf5b3f3646766f99513e57cafd`);
    const latLong=await info.json();
    
    let lat=latLong[0].lat;
    let lon=latLong[0].lon;
    console.log(lat,lon);
    localStorage.setItem('lat',lat);
    localStorage.setItem('lon',lon);

    navigate('/searchrestaurants/');
  }
  const [sortedCities, setSortedCities] = useState([...initialCities]);
  const [isSorted, setIsSorted] = useState(false);

  const toggleSort = () => {
    if (isSorted) {
      setSortedCities([...initialCities]);
    } else {
      const sorted = [...initialCities].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
      setSortedCities(sorted);
    }
    setIsSorted(!isSorted);
  };

  // useEffect(()=>{
  //   getSearch(params.search);
  // },[params.search]);
 
  return (
    <div className="container ">
    
   
      <div className="container">
      
      <div className="sortBar row">
      <h4 className="col-md-9">We are currently serving in below cities</h4>
      <Button w="40%" colorScheme='teal' variant='outline' size='sm' onClick={toggleSort} className="col-md hovering">
           Sort A-Z
         </Button>
       </div>
        <div className="row row-cols-3 rest ">
      {sortedCities.map((city)=>{
        return<div className="col restCol hovering" onClick={()=>searchGeolocation(city)}>
          <div className="inner "><ImLocation/>{city}</div>
          </div>
      })}</div></div>
    </div>
  )
}

export default Restaurants;

