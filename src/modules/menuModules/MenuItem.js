import React from "react";
import '../../cssFiles//menuFiles/menu.css';


const MenuItem = ({description}) => {
    return(
        <a className="menu-a" href="">{description}</a>
    );
}

export default MenuItem;