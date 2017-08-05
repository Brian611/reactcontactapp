import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBSb3TtMDYF8djw98IXftx8How8chK-4Ik",
    authDomain: "react-contact-app.firebaseapp.com",
    databaseURL: "https://react-contact-app.firebaseio.com",
    projectId: "react-contact-app",
    storageBucket: "react-contact-app.appspot.com",
    messagingSenderId: "1048229730120"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export { base };