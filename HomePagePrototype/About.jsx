import React, { Component } from 'react';
import "./App.css";
import AALogo from './AALogo.png';
import AAAction from './AAAction.png';

class About extends Component{
render(){
        return(
        <div className = "about"> {/*because react already creates a root div*/}
            <button className= "button">About</button>
            <br></br>
            <br></br>
            <img src={AALogo} alt=""></img>
            <h2>What We Do</h2>
            <ul className = "list">
             <li >31 beds, future planning for 40 then 50</li>   
             <li>Lead center for varied specialties</li>
             <li>Biggest single Pediatric Intensive Care Unit in Europe</li>
             <li>We support c.1500 admission to the PICU each year</li>
            </ul>
            <h2>What Help Do Our Families Need?</h2>
            <ul className = "list">
                <li>Emergency toiletries</li>
                <li>Financial help (parking, eating, accommodation)</li>
                <li>Snacks as leaving the ICU feels to far to go and eat</li>
                <li>A hot drink and a chat</li>
                <li>Someone to sit with their child do they can have a shower, quick bite to eat, a break!</li>
            </ul>
            <br></br>
            <br></br>
            <img src={AAAction} alt=""></img>
        </div>
            );
    }
}
export default About;



