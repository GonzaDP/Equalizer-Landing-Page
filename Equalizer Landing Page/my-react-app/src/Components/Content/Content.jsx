import React, { Component } from "react";
import logo from "./logo.svg";
import IllustrationApp from "./IllustrationApp.png";
import BgPattern1 from "./BgPattern1.svg";
import "./Content.css";
import OrangeCard from "../OrangeCard/OrangeCard";
import IconTwitter from "./IconTwitter.svg";
import IconFacebook from "./IconFacebook.svg";
import IconInstagram from "./IconInstagram.svg";



class Content extends Component {
    render() {
        return(
            <div className="Todo"> 
                <img src= {logo} className="logo1"/>   
                <h1 className="Titulo"> 
                    We make your music
                    <br/>
                    sound extraordinary.
                </h1>
                <p className="p1">
                    A system audio equalizer specifically designed for Android and iOS. Freely tune the 
                    way your 
                    <br/>
                    music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids,
                    <br/>
                    treble, gain control, reverb, and more!
                </p>
                <div className="AtrasDelCelular">
                    <img src= {BgPattern1}  className="Img1" />  
                    <img src= {IllustrationApp} className="Img2"/>  
                    <OrangeCard/>
                </div>
                <div className="ParteDeAbajo">
                    <img src= {logo} className="logo2"/>  
                    <p className="Derechos">
                    All rights reserved © Equalizer 2021
                    <br/>
                    Have any problems? Contact us via social media or
                    <br/>
                    email us at <b>equalizer@example.com</b>
                    </p>
                    <div className="Iconos">
                        <img src={IconFacebook} className="IconFacebook"/>
                        <span className="span1"/>
                        <img src={IconInstagram} className="IconInstagram"/>
                        <span className="span1"/>
                        <img src={IconTwitter} className="IconTwitter"/>
                    </div>
                </div>
            </div>
                           
        )
    }
}


export default Content;