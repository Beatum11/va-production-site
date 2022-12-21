import React from "react";
import '../cssFiles/contacts.css';
import NeonText from "./NeonText";
import Form from "./Form";

const Contacts = () => {
    return(
        <div className="contacts-container">
            <NeonText actualText={"Контакты"}/>

            <div className="contacts-content">
                <Form/>
                <div className="contacts-text">
                    <h2>verusandatum@gmail.com</h2>
                    <h2>+7-995-880-78-74</h2>
                </div>
            </div>
            
            
            
        </div>
    );
}

export default Contacts;