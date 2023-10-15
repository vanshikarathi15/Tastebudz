import React,{useState, useEffect} from 'react';
import "./Home.css";
import {Link} from "react-router-dom";
import {gsap, Expo} from 'gsap';
import { RiDoubleQuotesL } from 'react-icons/ri';
const Home = () => {
  const [trivia,setTrivia]=useState([])
  const getTrivia=async()=>{
    const api=await fetch(`https://api.spoonacular.com/food/trivia/random?apiKey=fa43cb3d8777455f905954e3d7a9cd52`);
    const data=await api.json();
    setTrivia(data);
  }
  
useEffect(() => {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
  tl.to('.imageContainer:nth-child(1)', {
    ease: Expo.easeInOut,
    width: '100%',
    duration: 3,
  });

  // Synchronize the text animation with the first image animation
  tl.add(() => {
    const textTl1 = gsap.timeline();
    textTl1.to('.text h1:nth-child(1)', {
      ease: Expo.easeInOut,
      top: 0,
    });
    textTl1.to('.text h1:nth-child(1)', {
      ease: Expo.easeInOut,
      top: '-100%',
    }, '+=2'); // Delay the next animation by 2 seconds
  });

  tl.to('.imageContainer:nth-child(2)', {
    ease: Expo.easeInOut,
    width: '100%',
    duration: 3,
  }, '<'); // Animation starts simultaneously with the previous one

  // Synchronize the text animation with the second image animation
  tl.add(() => {
    const textTl2 = gsap.timeline();
    textTl2.to('.text h1:nth-child(2)', {
      ease: Expo.easeInOut,
      top: 0,
    });
    textTl2.to('.text h1:nth-child(2)', {
      ease: Expo.easeInOut,
      top: '-100%',
    }, '+=2'); // Delay the next animation by 2 seconds
  });

  tl.to('.imageContainer:nth-child(3)', {
    ease: Expo.easeInOut,
    width: '100%',
    duration: 3,
  }, '<'); // Animation starts simultaneously with the previous one

  // Synchronize the text animation with the third image animation
  tl.add(() => {
    const textTl3 = gsap.timeline();
    textTl3.to('.text h1:nth-child(3)', {
      ease: Expo.easeInOut,
      top: 0,
    });
    textTl3.to('.text h1:nth-child(3)', {
      ease: Expo.easeInOut,
      top: '-100%',
    }, '+=2'); // Delay the next animation by 2 seconds
  });
  getTrivia();
}, []);
  // useEffect(()=>{
  //   gsap.to(".imageContainer",{
  //     ease:Expo.easeInOut,
  //     width:'100%',
  //     duration:3,
  //     stagger:2
  //   })
  //   gsap.to('.text h1',{
  //     ease:Expo.easeInOut,
  //     stagger:2,
  //     top:0
  //   })
  //   gsap.to('.text h1',{
  //     delay:2,
  //     ease:Expo.easeInOut,
  //     stagger:2,
  //     top:"-100%"
  //   })
  // },[])
    
  

  return (
    <>
    <div className="container body">
    <div className=" container main " >
    <div className="center row">
    
      <div className=" col-md">
      <div className="text">
        <h1 >COOK WHAT YOU LOVE</h1>
        <h1>or EAT WHERE YOU LOVE</h1>
        <h1 >TASTEBUDZ.com</h1>
      </div>
      <div className="imageContainer"><img src="https://images.unsplash.com/photo-1461009463816-4edea93afd6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxmb29kfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="food-img"></img></div>
      <div className="imageContainer"><img src="https://plus.unsplash.com/premium_photo-1681487492845-1921303e091b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHJlc3RhdXJhbnR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=600&q=60" alt="food-img"></img></div>
      <div className="imageContainer"><img src="https://images.unsplash.com/photo-1556911073-a517e752729c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2QlMjBjb29raW5nfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="food-img"></img></div>
      
    </div>
    
    </div>   
    </div>
    <div className="row trivia_row">
      <div className="quotes col pt-4 pl-4"><RiDoubleQuotesL/></div>
      <div className="col-9 trivia"> <h2>{trivia.text}</h2></div>
   
    </div>
    <div className="row row_one ">
      <div className="col-md-7 p-5">
        <img className="row_one_img" src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGN1aXNpbmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"></img>
      </div>
      <div className="col-md pt-5">
      <p>Recipes from</p>
        <h1>Worldwide </h1>
        <p>Cuisine</p>
        <br></br>
        <p>Indulge your taste buds in a global culinary journey </p>
        <div className=" col_button_c pt-5">
     <Link to="/recipes/"><button type="button" class="btn btn-info">Find Cuisines </button></Link>
     </div>
      </div>

    </div>
    <div className="row row_two">
    <div className="col-md">
      <p>Easy to follow</p>
        <h1> STEPS</h1>
        <br></br>
        <p>With clear step-by-step instructions, you'll have delicious meals in no time.</p>
        
      </div>
      <div className="col-md-7 p-4">
        <img className="row_two_img" src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"></img>
      </div>
    </div>
    <div className="row row_three">     
        {/* <img src="https://images.unsplash.com/photo-1618681462303-7a8bfebfdcca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"></img> */}
      
      
     <div className="col-md-6 pt-3">
      <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"></img>
     </div>
     <div className="col-md p-4">
        <p>Discover, Dine, and Savor: </p>
        <h1>Ultimate Restaurant Directory</h1>
        <div className=" col_button pt-5">
     <Link to="/restaurants"><button type="button" class="btn btn-info">Search Restaurants </button></Link>
     </div>
        
      </div>
       
    </div>
     
    

    </div>
    </>
  )
}


export default Home;