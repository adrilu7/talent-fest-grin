import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

// import logo from ".../../assets/logotipo-pokedeck-login.png";
import iconGoogle from "../../assets/google-logo-icon-PNG-Transparent-Background.png";
import { auth } from '../../firebase';
import * as ROUTES from '../../constants/routes';
import './SignIn.css';

const SignInPage = ({ history }) =>
  <main>
  {/* <img src={logo} alt="logo-pokedeck" id="logo-index" /> */}
  <img alt="logo-pokedeck" id="logo-index" />
  <h1>my.pokedeck</h1>
  <p>
    Texto de introducción
  </p>
  <SignInButton history={history} />
  </main>

class SignInButton extends Component {
  signInWithGoogle = () => {
    // console.log('holi');
    const {
      history,
    } = this.props;

    auth.doSignInWithGoogle()
    history.push(ROUTES.HOME);
  }

  render() {
    return (
        <button type="button" id="btn-google" onClick={()=>this.signInWithGoogle()}>
          <img src={iconGoogle} alt="icon-google" />
          Google
        </button>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInButton,
}
