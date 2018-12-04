import * as firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBYiCtUEOtet1va7u-LZ4mnt4pXKKpzQLY",
    authDomain: "pockedecktcg.firebaseapp.com",
    databaseURL: "https://pockedecktcg.firebaseio.com",
    projectId: "pockedecktcg",
    storageBucket: "pockedecktcg.appspot.com",
    messagingSenderId: "80073856143"
};

const firebaseAuth = firebase.initializeApp(firebaseConfig);

export default firebaseAuth; 