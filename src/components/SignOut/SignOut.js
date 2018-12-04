import React, {Component} from 'react'; 
import Firebase from '../../firebase/FirebaseCredentials';
import {Icon} from 'react-materialize';
import { Link } from 'react-router-dom';

class signOut extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        Firebase.auth().signOut();
        
    }
    render() {
        return (
          <Link to='/' onClick={this.logout}><Icon>exit_to_app
          </Icon></Link>
        );
    }
}

export default signOut