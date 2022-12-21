import React from "react";
import '../cssFiles/portfolioPart.css';
import VideoList from "./VideoList";
import NeonText from "./NeonText";


const PortfolioPart = () => {
    return(
        <div className="portfolio-container">
            <div className="portfolio-text">
                <NeonText actualText={"Наши работы:"}/>
            </div>
            <VideoList/>
        </div>
    );
}

export default PortfolioPart;