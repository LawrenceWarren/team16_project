import React from 'react';
import './css/Contact.css';
import Header from './Header';
import Footer from "./Footer";

class Contact extends React.Component {
    render(){
        return(
            <div>
                <Header />

                <div> Contact </div>

                <div>
                    <form>
                        <h1>Please fill your information here</h1>
                        <div>
                            <label>First Name *</label>
                            <input type="text" required/>
                        </div>
                        <div>
                            <label>Last Name *</label>
                            <input type="text" required/>
                        </div>
                        <div>
                            <label>Email Address</label>
                            <input type="text" required/>
                        </div>
                        <div>
                            <label>Phone number *</label>
                            <input type="text" required/>
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea></textarea>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>

                <Footer />
                
            </div>
            )
        }
    }

export default Contact;