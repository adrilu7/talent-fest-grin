import React, { Component } from 'react'
import { Row, Input, Button } from 'react-materialize'
import Firebase from '../../firebase/FirebaseCredentials'
import { Link } from 'react-router-dom'
import FirebaseAuth from '../../firebase/FirebaseUI'
import logoCircular from '../../assets/pokedeck-icono-circular.svg'
import './SignIn.css'

class loginInput extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.state = {
            email: '',
            password: '',
        }
    }

    login() {
        Firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                window.location.assign(`${process.env.PUBLIC_URL}/home`);

            }).catch((err) => {
                alert(err.code);
            });
    }

    handleOnChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className='entire-page'>
            <div className='inputContainer'>
            <Row>
                <img src={logoCircular} alt='circular-logo' height='150' width='150'/>
            </Row>
                <form>
                    <Row>
                        <Input value={this.state.email} onChange={this.handleOnChange} className='inputHover' s={10} m={10} l={10} label="Email" name='email' type='email' validate></Input>
                    </Row>
                    <Row>
                        <Input value={this.state.password} onChange={this.handleOnChange} className='inputHover' s={10} m={10} l={10} label="Password" validate name='password' type='password'></Input>
                    </Row>
                    <Row>
                    </Row>
                    <Row>
                        <Button type='submit' onClick={this.login} s={10} m={10} l={10} waves='light' className='signInButton'>Conectate</Button>
                    </Row>
                </form>
                <Row>
                    <FirebaseAuth />
                    <Link to='/register' s={10} m={10} l={10} className='newUser'>Crear Cuenta</Link>
                </Row>
            </div>
            </div>
        )
    }
}
export default loginInput