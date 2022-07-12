import React, { Component } from "react";
import "./OrangeCard.css";
import IconAndroid from "./IconAndroid.svg";
import IconApple from "./IconApple.svg";



class OrangeCard extends Component {
    render() {
        return(
            <div className="ConteinerCard">
                <h1 className="TituloCard">
                     Premium EQ
                </h1>
                <p className="pCard1">
                    Get expert-level control with a 
                    <br/>
                    robust equalizer, volume mixer, and  
                    <br/>
                    spatial audio. Take your listening  
                    <br/>
                    experience to a whole new level and 
                    <br/>
                    access all our incredible features!
                </p>
                <div className="precioymes">
                    <p className="precio">
                        4$
                    </p>
                    <p className="mes">
                        /month
                    </p>   
                </div>
                    <button className="Button1">
                        <div className="Button1Inside">
                            <img src={IconApple} className="IconApple"/>
                            <p className="TxtButton1">
                                iOS Download
                            </p>
                        </div>
                    </button>
                    <button className="Button2">
                        <div className="Button2Inside">
                            <img scr={IconAndroid} className="IconAndroid"/>
                            <p className="TxtButton2">
                                Android Download
                            </p>
                        </div>
                    </button>
              

            </div>
        )
    }
}


export default OrangeCard;