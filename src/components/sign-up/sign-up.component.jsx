import React from 'react';
import './sign-up.styles.scss';
import CustomButton from './../custom-button/custom-button.component';
import FormInput from './../form-input/form-input.component';
import { auth, createUserProfileDoc } from './../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

    }

    handleSubmit = async e => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("Confirm password does not match.");
            return;
        }else{
            try {
                const { user } = await auth.createUserWithEmailAndPassword(email, password);
    
                await createUserProfileDoc(user, {displayName})
                
                this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                });                
            } catch (error) {
                console.error(error);
            }

        }
    }

    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value})
    }

    render(){
        return (
            <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
        
            <form onSubmit={this.handleSubmit}>
            <FormInput name='displayName' 
                type='text' 
                value={this.state.displayName} 
                handleChange={this.handleChange}
                label='Display Name'
            required/>
            
            <FormInput name='email' 
                type='email' 
                value={this.state.email} 
                handleChange={this.handleChange}
                label='email'
            required/>

            <FormInput name='password' 
                type='password' 
                value={this.state.password} 
                handleChange={this.handleChange}
                label='Password'
            required/>
        
            <FormInput name='confirmPassword' 
                type='password' 
                value={this.state.confirmPassword} 
                handleChange={this.handleChange}
                label='Confirm Password'
            required/>

            <div className="buttons">
                <CustomButton type='submit'>Sign Up</CustomButton>
            </div>
            </form>    
            </div>
        )
    }    
}

export default SignUp;