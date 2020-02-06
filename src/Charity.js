import React from 'react';
import './css/Charity.css';
import Header from './Header';
import Footer from "./Footer";

class Charity extends React.Component {
    render(){
        return(
            <div>
                <Header />

                <div> This is the Charity page </div>

                <Footer />
            </div>
            )
        }
    }

export default Charity;