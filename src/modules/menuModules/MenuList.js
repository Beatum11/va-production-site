import React from "react";
import MenuItem from "./MenuItem";
import '../../cssFiles/menuFiles/menuList.css';

const MenuList = () => {
    return(
        <ul className="flex">
                <li className="list-item">
                    <MenuItem description={"Главная"}/>
                </li>
                <li className="list-item">
                    <MenuItem description={"О нас"}/>
                </li>
                <li className="list-item">
                    <MenuItem description={"Портфолио"}/>
                </li>
                <li className="list-item">
                    <MenuItem description={"Контакты"}/>
                </li>
        </ul>
    );
}

export default MenuList;
