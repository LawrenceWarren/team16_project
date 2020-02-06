import React from 'react';
import './css/Contact.css';
import Header from './Header';
import Footer from "./Footer";

class Contact extends React.Component {
    render(){
        return(
            <div>
                <Header />

                <div> This is the Contact page </div>

                <Footer />
            </div>
            )
        }
    }

export default Contact;