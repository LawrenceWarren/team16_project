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
                    <div>Birmingham Mind</div>
                    <div>Breast Cancer Support Charity</div> 
                    <div>Baron Davenport\'s Charity</div> 
                    <div>Cancer Research UK</div> 
                    <div>Birmingham Sports and Education Foundation</div> 
                    <div>Heart Research UK Midlands</div> 
                    <div>CLDF - Children\'s Liver Disease Charity</div> 
                    <div>British Heart Foundation Furniture and Electrical</div> 
                    <div>The Prince\'s Trust Birmingham Centre</div> 
                    <div>Personal Support Unit</div>   
                    <div>Birmingham LGBT</div> 
                    <div>RSPB</div> 
                    <div>Smart Works Birmingham</div>

                <Footer />
            </div>
            )
        }
    }

export default Charity;