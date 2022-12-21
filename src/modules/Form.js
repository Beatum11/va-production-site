import { render } from '@testing-library/react';
import Axios from 'axios';
import React, { Component, useState } from "react";
import '../cssFiles/form.css';

class Form extends Component{

    constructor(props){
        super(props);

        this.state = {
            Name: '',
            Email: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);

        Axios.post('/Clients', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }


    render(){
        const{ name, email} = this.state;

        return(
            <div class="login-box">
                <h2>Оставить заявку</h2>
                <form onSubmit={this.submitHandler}>
                    <div class="user-box">
                    <input onChange={this.changeHandler} value={name}
                                                type="text" name="Name"/>
                    <label>Ваше имя</label>
                    </div>
                    <div class="user-box">
                    <input onChange={this.changeHandler} value={email}
                                            type="text" name="Email"/>
                    <label>Ваш email</label>
                    </div>

                    <button className='form-button' type='submit'>
                    <a>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Отправить
                    </a>    
                    </button>      
                </form>
            </div>
        )
    };
}

export default Form;