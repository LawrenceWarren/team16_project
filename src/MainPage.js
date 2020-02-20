import React from 'react';
import './css/MainPage.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {grey} from "@material-ui/core/colors";
import figure from "./resource/Ava's Angels.jpg";
import Header from './Header';
import Footer from "./Footer";
import Contact from './Contact';

const MainButton = withStyles({
    root: {
        fontSize: "2.5vw",
        boxShadow:"none",
        textTransform:"none",
        fontWeight:"bold",
        fontFamily: "Georgia",
        height:"15vw",
        width:"25vw",
        backgroundColor: grey[500],
        borderRadius:"8vw",
        "&:hover": {
            backgroundColor: grey[700]
        },
    }
})(Button);

const FoodContactMarginStyle = makeStyles(theme => ({
    margin: {
        marginRight: "3vw",
    }
  }));

const AccomFeedBackMarginStyle = makeStyles(theme => ({
    margin: {
        marginLeft: "3vw",
    }
}));

const CharityMarginStyle = makeStyles(theme => ({
    margin:{
        marginRight: "5vw",
        marginBottom: "5vw",
    }
}))

const AboutMarginStyle = makeStyles(theme => ({
    margin:{
        marginLeft: "5vw",
        marginBottom: "5vw",
    }
}))

function MainPage() {
    const FCMargin = FoodContactMarginStyle();
    const AFMargin = AccomFeedBackMarginStyle();
    const CMargin = CharityMarginStyle();
    const AMargin = AboutMarginStyle();

    return (
    <div>
        <Header />

        <div class = "introduce"> Introduction: </div>
        <div class = "introduction">
            <img src= {figure} alt = "Ava's Angel" class="history-image"/>
            <p class = "content-history">
                <div class = "title">
                    <a href = "https://www.avas-angels.com/">
                        <p>{"History of Ava's Angels"}</p>
                    </a>
                </div>
                <br/><br/>Ava was a perfectly healthy and beautifl 3 year old girl, enjoying every aspect of life, who unexpectedly fell ill on holiday in March 2017.
                Ava and her parents had a perfect holiday and were about to fly home to share these memories. Ava contracted an extremely rare form of the very 
                common Epstein Barr Virus which impacted her brain and whilst there is no immunisation against it, no treatment to shop the impact or to cure it,
                all options were exhasuted to give Ava the best possible chance of recovery.
                Sadly, Ava passed away after a long battle by her loved ones to keep her with them.
                Inspired by Ava, and wanting to help other children, {"Ava's Angels"} was established in March 2018 and provides support to families of sick children
                during hospital stays, helping them to spend more time caring for their child.
            </p>
        </div>
        <br />

        <div class = "introduction">
            <img src="https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/75244443_161725248223830_1550331828311660529_n.jpg?_nc_ht=scontent.cdninstagram.com&oh=72acfbed5db6d7cc4e5d42f9e56fafb6&oe=5E6FA1A4" class = "introduction-image" alt = "ava_activity"/>
            <p class = "content-introduction">
                <div class = "title">
                    <a href = "https://www.avas-angels.com/">
                        <p>{"Ava's Angels In Action"}</p>
                    </a>
                </div>
                <br/><br/>Helping families with sick children.
                Providing relief of sickness and suffering among children being cared for in hospital by providing items,
                services and emotional support for families to enable them to visit, spend quality time with and care for such children.
                This website works focused on providing support to parents of children in ICUs at a Brimingham hospital. This wish to display
                information to parents that are staying at the hospital while their children are under treatment. This also provide information about
                 local services, hospital facilities and general support information.
            </p>
        </div>
        <br /><br />

        <div class = "explore"> Explore: </div>

        <div class = "button">
            <div>
                <MainButton variant="contained" color="primary" className={FCMargin.margin}>Food</MainButton>
                <MainButton variant="contained" color="primary" className={AFMargin.margin}>Accommodation</MainButton>
            </div>
            <div>
                <MainButton variant="contained" color="primary" className={CMargin.margin}>Charities</MainButton>
                <img src="https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/75244443_161725248223830_1550331828311660529_n.jpg?_nc_ht=scontent.cdninstagram.com&oh=72acfbed5db6d7cc4e5d42f9e56fafb6&oe=5E6FA1A4" class = "button_image" alt = "ava_activity"/>
                <MainButton variant="contained" color="primary" className={AMargin.margin}>About</MainButton>
            </div>
            <div>
                <MainButton path={Contact} variant="contained" color="primary" className={FCMargin.margin}>Contact</MainButton>
                <MainButton variant="contained" color="primary" className={AFMargin.margin}>Feedback</MainButton>
            </div>
        </div>

        <Footer />
    </div>
    );
}

export default MainPage;
