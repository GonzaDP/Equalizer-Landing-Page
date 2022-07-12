import React, { Component } from "react";
import Content from "../Content/Content";
import "./Container.css";



class Container extends Component {
    render() {
        return(
            <div className="PageBackground">
              <Content/>    
            </div>
        )
    }
}


export default Container;