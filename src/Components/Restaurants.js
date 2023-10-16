import React,{useState,useEffect} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';

const Restaurants = () => {
  const [input,setInput]=useState('');
  const navigate=useNavigate();
  const [error, setError] = useState('');
  
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
  // useEffect(()=>{
  //   getSearch(params.search);
  // },[params.search]);
  const cities=["Newton","Toronto","Lawrence","Greenfield","Chicago",
                "Portland","Monroe","Pittsburg","Burlington"]

  return (
    <div className="container ">
     <div className="searchBar">
      {/* <form onSubmit={submitHandler}>
        <input
         className="inputSearch"
          type="text"
          placeholder="Search for restaurants"
          value={input}
          onChange={(e)=>setInput(e.target.value)}/>

        <button type="submit" className="submitbtn hovering" ><FaSearch/></button>
        <h5 className="query">{input}</h5>
      </form> */}
      
      </div>
   
      <div className="container">
        <div className="row row-cols-3 rest ">
      {cities.map((city)=>{
        return<div className="col restCol hovering" onClick={()=>searchGeolocation(city)}>
          <div className="inner "><ImLocation/>{city}</div>
          </div>
      })}</div></div>
    </div>
  )
}

export default Restaurants;

