import React from 'react';
import './css/Accommodation.css';
import Header from './Header';
import Footer from "./Footer";

class Accommodation extends React.Component {
    render(){
        return(
            <div>
                <Header />

                <div> This is the Accommodation page </div>

                <Footer />
            </div>
            )
        }
    }

export default Accommodation;