import React from "react";
import Form from "./Form";
import '../cssFiles/mainPart.css';

const MainPart = () =>{
    return(
        <div className="main-body">

        <div className="mainPart-container">
            <div className="mainPart-text">
                <h1>V&A Production</h1>
                <p className="mainPart-description">
                    Более 5 лет мы работаем в сфере производства видео. 
                    Отсняли больше 100 клипов и готовы помочь Вам в воплощении любой задумки.
                    Оставьте заявку и получите расчет стоимости Вашего клипа.
                </p>
                <p className="mainPart-addition">
                    Снимаем клипы от 19.990 руб!
                </p>
            </div>

            <div className="mainPart-form">
                <Form/>
            </div>
        </div>
    </div>
    );
}

export default MainPart;