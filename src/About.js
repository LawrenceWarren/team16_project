import React from 'react';
import './css/About.css';
import Header from './Header';
import Footer from "./Footer";

class About extends React.Component {
    render(){
        return(
            <div>
                <Header />

                <div> This is the About page </div>

                <Footer />
            </div>
            )
        }
    }

export default About;