import React ,{useState} from 'react';
import "./Recipes.css";
import { FaSearch } from 'react-icons/fa';
import PopularRecipes from './PopularRecipes';
import Cuisines from './Cuisines';
import Protien from './Protien';
import Vegan from './Vegan';
import { useNavigate } from 'react-router-dom';

const Recipes = () => {
  const [input,setInput]=useState('');
const navigate=useNavigate();
const [error, setError] = useState('');

  const submitHandler=(e)=>{
    e.preventDefault();
    if (input.trim() === '') {
      setError('Please enter a valid search query.');
      return; // Exit the function if the searchValue is empty
    }
    setError('');
    navigate('/search/'+input)
  }
  return (
   
    <div className="container">
      <div className="searchBar">
      <form  onSubmit={submitHandler}>
      <div >
        <input
        className="inputSearch"
          type="text"
          placeholder="Search recipes"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
        />
        <button className="submitbtn hovering" type="submit"><FaSearch/></button>
        <h5 className="query">{input}</h5></div>
      </form>
      {error && <p className="text-danger">{error}</p>}
      </div>
    <h2 className="headingStyles">POPULAR PICKS</h2>
    <PopularRecipes/>
    <h2 className="headingStyles">HIGH PROTIEN DIETS</h2>
    <Protien/>
    <Cuisines/> 
    <h2 className="headingStyles">VEGAN DIETS</h2>
    <Vegan/>
    </div>
  )
}

export default Recipes;