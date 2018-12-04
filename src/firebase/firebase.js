// Initialize Firebase
import firebase from "firebase";
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyBYiCtUEOtet1va7u-LZ4mnt4pXKKpzQLY",
    authDomain: "pockedecktcg.firebaseapp.com",
    databaseURL: "https://pockedecktcg.firebaseio.com",
    projectId: "pockedecktcg",
    storageBucket: "pockedecktcg.appspot.com",
    messagingSenderId: "80073856143"
};

if(!firebase.apps.length) {
    firebase.initializeApp(config);
}

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
const db = firebase.database();

export {
    provider,
    auth,
    db
};
