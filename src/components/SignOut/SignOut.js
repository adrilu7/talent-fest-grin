import React, {Component} from 'react'; 
import Firebase from '../../firebase/FirebaseCredentials';
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
          <Link to='/' onClick={this.logout}>Logout</Link>
        );
    }
}

export default signOut