import React from 'react';
import {NavLink} from 'react-router-dom';

const Cuisines = () => {

return (
  <div className="container">
            <div className="row row-cols-2 d-flex justify-content-between">

            <div className="col p-4 cuisines"> <NavLink to={'/recipes/cuisines/italian'} >
            <div className="d-flex justify-content-between">
            <div className="cuisine-img ">
              <img className="cuisine-img" src="https://plus.unsplash.com/premium_photo-1667682942148-a0c98d1d70db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGl0YWxpYW4lMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60">
              </img>
            </div><button className="p-3">Italian</button></div>
            </NavLink></div>

            <div className="col p-4 cuisines"> <NavLink to={'/recipes/cuisines/chinese'} >
            <div className="d-flex justify-content-between">
            <div className="cuisine-img "><img className="cuisine-img" src="https://images.unsplash.com/photo-1503764654157-72d979d9af2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoaW5lc2UlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"></img></div>
            <button className="p-3">Chinese</button></div>
            </NavLink></div>

            <div className="col p-4 cuisines"> <NavLink to={'/recipes/cuisines/indian'} >
            <div className="d-flex justify-content-between">
            <div className=" cuisine-img "><img className="cuisine-img" src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwZm9vZHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"></img></div>
            <button className="p-3">Indian</button></div>
            </NavLink></div>

            <div className="col p-4 cuisines"> <NavLink to={'/recipes/cuisines/mexican'} >
            <div className="d-flex justify-content-between">
            <div className=" cuisine-img "><img className="cuisine-img" src="https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWV4aWNhbiUyMGZvb2R8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=600&q=60"></img></div>
            <button className="p-3">Mexican</button></div>
            </NavLink></div>

            <div className="col p-4 cuisines"> <NavLink to={'/recipes/cuisines/french'} >
            <div className="d-flex justify-content-between">
            <div className=" cuisine-img "><img className="cuisine-img" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlbmNoJTIwZm9vZHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"></img></div>
            <button className="p-3">French</button></div>
            </NavLink></div>

            <div className="col p-4 cuisines"> <NavLink to={'/recipes/cuisines/mediterranean'} >
            <div className="d-flex justify-content-between">
            <div className="cuisine-img "><img className="cuisine-img" src="https://images.unsplash.com/photo-1590759668628-05b0fc34bb70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNlYSUyMGZvb2R8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=600&q=60"></img></div>
            <button className="p-3">Sea Food</button></div>
            </NavLink></div>

            <div className="col p-4 cuisines"> <NavLink to={'/recipes/cuisines/thai'} >
            <div className="d-flex justify-content-between">
            <div className=" cuisine-img "><img className="cuisine-img" src="https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGhhaSUyMGZvb2R8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=600&q=60"></img></div>
            <button className="p-3">Thai</button></div>
            </NavLink></div>

            <div className="col p-4 cuisines"> <NavLink to={'/recipes/cuisines/korean'} >
            <div className="d-flex justify-content-between">
            <div className=" cuisine-img "><img className="cuisine-img" src="https://images.unsplash.com/photo-1580651315530-69c8e0026377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a29yZWFuJTIwZm9vZHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"></img></div>
            <button className="p-3">Korean</button></div>
            </NavLink></div>
            </div>
  </div>
)
}

export default Cuisines