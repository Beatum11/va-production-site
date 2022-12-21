import React, { Component } from "react";
import Axios  from 'axios';

class FormPost extends Component{
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
    };

    render(){

        const{ name, email} = this.state;
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.changeHandler} name="Name" type="text"
                                                         value={name}/>
                    <input onChange={this.changeHandler} name="Email"
                                                         type="text" value={email}/>
                    <button type="submit">submit</button>
                </form>
                
            </div>

        )
    }
}


export default FormPost;