import React from 'react';
import './css/Footer.css';
import FaceBook from "./resource/facebook.png";
import Twitter from "./resource/ttww.png";
import Ins from "./resource/ins.png";
import LinkedIn from "./resource/linkedin.png";
import FeedBack from "./resource/feedback.png";
import donate from "./resource/donate.png";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {grey} from "@material-ui/core/colors";


const FooterButton = withStyles({
    root:{
        marginRight: "1.5vw",
        marginTop: "1vw",
        height: "2.5vw",
        width: "2.5vw",
        backgroundColor: "#FFFFFF",
        "&:hover": {
            backgroundColor: grey[500]
        },
    }
})(Button);

const GetInvolvedButton = withStyles({
    root:{
        fontSize: "1.1vw",
        fontWeight:"bold",
        fontFamily: "Georgia",
        height:"10vw",
        width:"30vw",
        color: "rgba(39, 39, 39,0.7)",
        backgroundColor: "#FFFFFF",
        "&:hover": {
            backgroundColor: grey[400]
        },
        marginTop: "3.5vw",
    }
})(Button);

const FaceBookImage = makeStyles(theme => ({
    image: {
        backgroundImage: `url(${FaceBook})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"50% 50%",
        backgroundPosition: "center",
    },
}));

const TwitterImage = makeStyles(theme => ({
    image: {
        backgroundImage: `url(${Twitter})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"50% 50%",
        backgroundPosition: "center",
    },
}));

const InsImage = makeStyles(theme => ({
    image: {
        backgroundImage: `url(${Ins})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"50% 50%",
        backgroundPosition: "center",
    },
}));

const LinkedInImage = makeStyles(theme => ({
    image: {
        backgroundImage: `url(${LinkedIn})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"50% 50%",
        backgroundPosition: "center",
    },
}));

const FeedBackImage = makeStyles(theme => ({
    image: {
        backgroundImage: `url(${FeedBack})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"50% 50%",
        backgroundPosition: "center",
    },
}));

function Footer(){
    const FaceBookImg = FaceBookImage();
    const TwitterImg = TwitterImage();
    const InsImg = InsImage();
    const LinkedInImg = LinkedInImage();
    const FeedBackImg = FeedBackImage();

    return(
        <div>
            <div class = "involved"> Get Involved: </div>

            <div align="center"> 
                <GetInvolvedButton 
                    variant="contained" 
                    color="primary" 
                    onClick={()=>{window.open("https://www.avas-angels.com/getinvolved.html")}}
                >
                    {"Become Part Of Ava's Angels"}
                </GetInvolvedButton>
            </div>

            <div class="donate" align="center">
                <a href="https://www.paypal.com/fundraiser/112574636177901026/charity/3575409">
                    <img src={donate} alt="donate with paypal or card"  />
                </a>
            </div>

            <div class = "contact">  
                <FooterButton 
                    variant="contained" 
                    color="primary" 
                    className={FaceBookImg.image} 
                    onClick={()=>{window.open("https://www.facebook.com/avas.angels.739")}}
                >
                </FooterButton>
                <FooterButton 
                    variant="contained" 
                    color="primary" 
                    className={TwitterImg.image} 
                    onClick={()=>{window.open("https://twitter.com/AvasAngels_com")}}
                >
                </FooterButton>
                <FooterButton 
                    variant="contained" 
                    color="primary" 
                    className={InsImg.image} 
                    onClick={()=>{window.open("https://www.instagram.com/avasangelscharity/")}}
                >
                </FooterButton>
                <FooterButton 
                    variant="contained" 
                    color="primary" 
                    className={LinkedInImg.image} 
                    onClick={()=>{window.open("https://www.linkedin.com/in/avas-angels-1519a2160/")}}
                >
                </FooterButton>
                <FooterButton 
                    variant="contained" 
                    color="primary" 
                    className={FeedBackImg.image} 
                    onClick={()=>{window.open("https://www.avas-angels.com/contact.html")}}
                >
                </FooterButton>
            </div>

            <div class = "related">
                <p>
                    {/* eslint-disable-next-line */}
                    <a href = ""> FAQ </a> |
                    {/* eslint-disable-next-line */}
                    <a href = ""> Terms of Use </a> |
                    {/* eslint-disable-next-line */}
                    <a href = ""> Privacy </a> |
                    {/* eslint-disable-next-line */}
                    <a href = ""> Contact </a>
                </p>
            </div>

            <div class = "copyRight">
                <p>© Copyright 2019-2020. Designed and powered by Ali S., Lawrence W., Shan W.Z., Benjamin S., Chen Y.T. and Zhang J.H. All Rights Reserved. </p>
            </div>
        </div>
    );
}

export default Footer;