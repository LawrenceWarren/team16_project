import React from 'react';
import './css/Charity.css';
import Header from './Header';
import Footer from "./Footer";

class Charity extends React.Component {
    render(){
        return(
            <div>
                <Header />

                
                    <h1>Charities</h1>
                    <div class="search-container">
                    <form action="/action_page.php">
                        <input type="text" placeholder="Search.." name="search"></input>
                        <button type="submit" href="https://www.google.com/search?q=">Submit</button>
                    </form>
                    </div>
                    
                    <h2>Below are a selection of local charities with links to their webpages</h2>
                    <div>Birmingham Mind</div><a href="https://birminghammind.org/"><img src="https://upload.wikimedia.org/wikipedia/en/0/01/Mind-logo.gif"></img></a>
                    <div>Breast Cancer Support Charity</div> <a href="https://breastcancersupport.org.uk/"><img src="https://breastcancersupport.org.uk/wp-content/uploads/2015/11/logo.png"></img></a>
                    <div>Baron Davenport's Charity</div> <a href="https://www.barondavenportscharity.org/"><img src="https://www.barondavenportscharity.org/sites/all/themes/custom/nestor_subtheme/logo.png"></img></a>
                    <div>Cancer Research UK</div> <a href="https://www.cancerresearchuk.org/"><img src="https://www.cancerresearchuk.org/sites/all/themes/custom/cruk/cruk-logo.svg"></img></a>
                    <div>Heart Research UK Midlands</div> <a href="https://heartresearch.org.uk/contact-us/"><img src="https://www.thepayrollgivingteam.co.uk/wp/wp-content/uploads/2016/05/HRUK_Logo_Screen_FullColour-sml.jpg"></img></a>
                    <div>CLDF - Children's Liver Disease Charity</div> <a href="https://childliverdisease.org/"><img src="https://childliverdisease.org/wp-content/uploads/2019/04/CLDF-LOGO.png"></img></a>
                    <div>British Heart Foundation Furniture and Electrical</div> <a href="https://www.bhf.org.uk/what-we-do/find-bhf-near-you/birmingham-furniture-electrical-store"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/BHF_Logo_Lockup_Vertical_BHF_Red_RGB%404x.png"></img></a>
                    <div>The Prince's Trust Birmingham Centre</div> <a href="https://www.princes-trust.org.uk/about-the-trust/where-we-work/central-england/birmingham-centre"><img src="https://www.princes-trust.org.uk/cs/pt/img/logo.png"></img></a>
                    <div>Personal Support Unit</div> <a href="https://www.supportthroughcourt.org/"><img src="https://www.supportthroughcourt.org/media/2176/logo-w-psu-v2.png"></img></a>
                    <div>RSPB</div> <a href="https://www.rspb.org.uk/"><img src="https://www.rspb.org.uk/static/images/rspb-logo-white.png"></img></a>
                    <div>Smart Works Birmingham</div> <a href="https://smartworks.org.uk/birmingham-smart-works/"><img src="https://smartworks.org.uk/wp-content/themes/smartworks/images/logo.png"></img></a>

                <Footer />
            </div>
            )
        }
    }

export default Charity;