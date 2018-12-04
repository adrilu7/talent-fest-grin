import React, {Component} from 'react'; 
import Firebase from '../../firebase/FirebaseCredentials';
<<<<<<< HEAD
=======
import {Icon} from 'react-materialize';
>>>>>>> upstream/master
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
<<<<<<< HEAD
          <Link to='/' onClick={this.logout}>Logout</Link>
=======
          <Link to='/' onClick={this.logout}><Icon>exit_to_app
          </Icon></Link>
>>>>>>> upstream/master
        );
    }
}

export default signOut