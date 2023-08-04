import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Hero = () => {
    const history = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("click");
        history("/card");
         
        };
    return(
        <>
        <h2 className="mmr">Unlock Your Dream Career in Tech - Find Your Perfect Job Today</h2>
      <h3 className="mmr">Discover Top Software Engineering, Product Management, and Data Science Roles from Leading Companies Worldwide</h3>
      <button id="mmr" type="button" className="btn btn-light" onClick={handleSubmit}>Explore Job</button>
        </>
        )
    }
    export default Hero