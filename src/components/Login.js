import React, { useContext } from "react";
//FROM FIREBASE
// Import the functions you need from the SDKs you need
//it cover all history method
import { useNavigate } from "react-router-dom";
//import order is important
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  //it stay on the same page
  //onAuthStateChanged,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import GoogleButton from "react-google-button";
import { MyContext } from "../App";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDING_ID,
  appId: process.env.REACT_APP_APP_ID,
};
initializeApp(firebaseConfig);

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

//for google button

// Your web app's Firebase configuration

// Initialize Firebase

const Login = () => {
  const { setUser } = useContext(MyContext);
  //to change the url paramater
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    //which services we want to show
    signInWithPopup(auth, googleProvider)
      .then((userInfo) => {
        setUser(userInfo.user);
        //login page disappered and we want to change paramather
        //{replace:true} change the previous path
        navigate("/profile");
        //navigate(-2)go two step back

        console.log(userInfo);
      })
      .catch((err) => console.log(err.message));
  };

  //   useEffect(() => {
  //     //if auth is there
  //     let unsubscribe = onAuthStateChanged(auth)
  //       .then((userInfo) => {
  //         setUser(userInfo.user);
  //         //login page disappered and we want to change paramather
  //         //{replace:true} change the previous path
  //         navigate("/", { replace: true });
  //         //navigate(-2)go two step back
  //         return unsubscribe;
  //         console.log(userInfo);
  //       })
  //       .catch((err) => console.log(err.message));
  //   }, []);
  return (
    <div>
      <h1>Login Page</h1>
      <GoogleButton onClick={loginWithGoogle} />
    </div>
  );
};

export default Login;
