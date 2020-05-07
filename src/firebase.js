import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBfU21_wFJoim31a32CzDcTEIXFTfR3J2w",
  authDomain: "zavii-8dbbf.firebaseapp.com",
  databaseURL: "https://zavii-8dbbf.firebaseio.com",
  projectId: "zavii-8dbbf",
  storageBucket: "zavii-8dbbf.appspot.com",
  messagingSenderId: "986523550948",
  appId: "1:986523550948:web:05a048c3e1b706d26ed8f1",
  measurementId: "G-0R9VK0ELEQ"
};
  
firebase.initializeApp(firebaseConfig)
export default firebase;