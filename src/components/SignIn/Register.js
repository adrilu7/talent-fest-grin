
import React, {Component} from 'react'
import {Row, Input, Button} from 'react-materialize'
import {BrowserRouter as Router} from "react-router-dom";
import firebase from 'firebase'
import logoCircular from '../../assets/pokedeck-icono-circular.svg'

class registerInput extends Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.signUp = this.signUp.bind(this);
        
        this.state = {
        username: '',
        email: '',
        passwordOne: '',
        passwordTwo: '',
        }
    }

    signUp(event) {
        event.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.passwordOne)
        .then((user) => {
            if(user) {
             window.location.assign('/home')
            } else {
                window.location.assign('/')
            }
        }).catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode === 'auth/weak-password') {
              alert('The password is too weak.');
            } else {
              alert(errorMessage);
            }
          });
    }
    
    handleOnChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }
        
    render() {
        return (
        <Router>
        <div className='entire-page'>
        <div className='inputContainer'>
            <Row>
                <img src={logoCircular} height='150' width='150'/>
            </Row>
            <form>
                <Row>
                    <Input value={this.state.username} onChange={this.handleOnChange} type="text" className='inputHover' s={10}  m={10} l={10} label="Nombre" name='username' validate></Input>
                </Row>
                <Row>
                    <Input value={this.state.email}
          onChange={this.handleOnChange} className='inputHover' s={10}  m={10} l={10} label="Email" validate type='email' name='email'></Input>
                </Row>
                <Row>
                    <Input value={this.state.passwordOne}
          onChange={this.handleOnChange} className='inputHover' s={10}  m={10} l={10} label="Contraseña" validate type='password' name='passwordOne'></Input>
                </Row>
                <Row>
                    <Button type='submit' onClick={this.signUp} className='signInButton' s={10} m={10} l={10}>Registrate</Button>
                </Row>
            </form>
        </div>
        </div>
        </Router>
        );
    };
}
export default registerInput