import React from "react";
import '../../cssFiles/menuFiles/menu.css';
import MenuList from './MenuList';

const Menu = () => {
    return(
        <div className="menu-container flex">
            <MenuList/>
        </div>
    );
}

export default Menu;