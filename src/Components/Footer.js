import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
function Footer() {
  return (
    <div className="container">
      <div className="row footerMain">
      <div className=" col-md-8 footerText">
          <h3>Satisfying Cravings, one bite at a time.</h3>
      </div>
        <div className="col">
          <div className="footer-img">
            <img src="./TASTEBUDZ.png"></img>
            <div className="icons">
            <div className="footer-icon"><FaLinkedin/></div>
            <div className="footer-icon"><AiOutlineGithub/></div>
            </div>
          </div>
        </div>
          
        
      </div>
    </div>
  )
}

export default Footer