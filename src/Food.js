import React from 'react';
import './css/Food.css';
import Header from './Header';
import Footer from "./Footer";

class Food extends React.Component {
    render(){
        return(
            <div>
                <Header />

                <div> This is the Food page </div>

                <Footer />
            </div>
            )
        }
    }

export default Food;