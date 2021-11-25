- installed packages

* npm i bootstrap react-bootstrap
  npm install react-icons

- react-router-dom
  data
  https://fakestoreapi.com/products
  https://www.npmjs.com/package/react-rating-stars-component
  -npm i react-rating-stars-component
  mport ReactStars from "react-rating-stars-component";

* ReactStars
  count={5}
  onChange={ratingChanged}
  size={24}
  activeColor="#ffd700"

- https://dashboard.emailjs.com/admin/integration
  I create a connection to my email and create new template
  EmailJS>doc>React==> There is a ready code
  https://www.emailjs.com/docs/examples/reactjs/

  name shold be same with the template from email.js
  Hello {{user_name}},

You got a new message from {{from_name}}:
Your email is {{user_email}}

{{message}}

Best wishes,
Adem team

npm install emailjs-com
For login
react-google-button
https://www.npmjs.com/package/react-google-button

# For deployment

npm i firebase
import React, { useContext, useEffect } from "react";
FROM FIREBASE
Import the functions you need from the SDKs you need
it cover all history method
import { useNavigate } from "react-router-dom";
import order is important
import { initializeApp } from "firebase/app";
import {
getAuth,
GoogleAuthProvider,
signInWithPopup,
} from "firebase/auth";
-it stay on the same page
onAuthStateChanged,

TODO: Add SDKs for Firebase products that you want to use
https://firebase.google.com/docs/web/setup#available-libraries
import GoogleButton from "react-google-button";
