import React from "react";
import '../cssFiles/neonText.css';

const NeonText = ({actualText}) => {
    return(
        <div className="neonBody">
            <h2>{actualText}</h2>
        </div>
    );
}

export default NeonText;