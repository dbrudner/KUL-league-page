import React, {Component} from 'react';
import axios from 'axios';
import Header from '../../styled/elements/header'
import P from '../../styled/elements/p'
import Button from '../../styled/elements/button'


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
            error: ''
        }
    }

    handleChange = (key, value) => {this.setState({[key]: value})}

    handleSubmit = e => {
        e.preventDefault();
        const {email, password, passwordConfirm} = this.state;

        if (password !== passwordConfirm) return;

        axios.post('/signup', {email, password})
        .then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })

    }

    render() {
        return (
            <div>
                <Header center>Sign Up</Header>
                <P helper>Need help?</P>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.email} onChange={e => this.handleChange("email", e.target.value)} />
                    <br/>
                    <input type="text" value={this.state.password} onChange={e => this.handleChange("password", e.target.value)} />
                    <br/>                    
                    <input type="text" value={this.state.passwordConfirm} onChange={e => this.handleChange("passwordConfirm", e.target.value)} />
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        )
    }
}