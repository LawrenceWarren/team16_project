import React from 'react';
import './css/About.css';
import Header from './Header';
import Footer from "./Footer";
import AAService from "./resource/avasangelsservices.png";

class About extends React.Component {
    render(){
        return(
            <div>
                <Header />

                <div class = "establish">
                    <div class = "establish_header">
                        Establish
                    </div>
                    <div>
                        
                    </div>
                </div>

                <div class = "service">
                    <div class="service_header"> 
                        Service: 
                    </div>
                    <img src = {AAService} alt = "ava's angel service"/>
                </div>

                <div class="activity"> Activity: </div>

                <Footer />
            </div>
            )
        }
    }

export default About;