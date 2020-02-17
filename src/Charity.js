import React from 'react';
import './css/Charity.css';
import Header from './Header';
import Footer from "./Footer";

class Charity extends React.Component {
    render(){
        return(
            <div>
                <Header />

                <div> Here are a list of the charities near Birmingham children\'s hospital: </div>
                    <div>Birmingham Mind
                    Breast Cancer Support Charity 
                    Baron Davenport\'s Charity</div> 
                    <li>Cancer Research UK</li> 
                    <li>Birmingham Sports and Education Foundation</li> 
                    <li>Heart Research UK Midlands</li> 
                    <li>CLDF - Children\'s Liver Disease Charity</li> 
                    <li>British Heart Foundation Furniture and Electrical</li> 
                    <li>The Prince\'s Trust Birmingham Centre</li> 
                    <li>Personal Support Unit</li>   
                    <li>Birmingham LGBT</li> 
                    <li>RSPB</li> 
                    <div><li>Smart Works Birmingham</li></div>

                <Footer />
            </div>
            )
        }
    }

export default Charity;