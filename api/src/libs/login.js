const firebase = require('firebase');
const auth = require('firebase/auth');

var firebaseConfig = {
  apiKey: "AIzaSyChYXJgm5dUXSoJJoHwBzagrHnZvgCh7qg",
  authDomain: "laboratoriapuru.firebaseapp.com",
  projectId: "laboratoriapuru",
  storageBucket: "laboratoriapuru.appspot.com",
  messagingSenderId: "514113083778",
  appId: "1:514113083778:web:4035a1dc2aaa1ad3bed79b"
};


firebase.initializeApp(firebaseConfig);

const register = async(email, password) => {
  let g = {};
   await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      g = { "msg": "user created Ok" }
    })
    .catch((error) => {
      g = {
        error: {
          errorCode: error.code,
          errorMessage: error.message
        }
      }
    });

    return g;
};



const authLogin = async(email, password) => {
  let g = {};
   await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      g = { "msg": "login ok", email }
      console.log(userCredential.user);
    })
    .catch((error) => {
      g = {
        error: {
          errorCode: error.code,
          errorMessage: error.message
        }
      }
    });

    return g;
};




module.exports = { register, authLogin };
