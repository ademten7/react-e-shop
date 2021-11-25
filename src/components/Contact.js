import React, { useRef, useState } from "react";
//import Email js
import EmailJS from "emailjs-com";
import "./Contact.scss";

//just get all form

const Contact = () => {
  //this is the from reference
  const formRef = useRef();
  const [status, setStatus] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    //it returns promise pass here 4 argument
    // EmailJS.sendForm(
    //   "YOUR_SERVICE_ID", ==>from email service on EmailJS
    //   "YOUR_TEMPLATE_ID",==>from  email template > setting > Template ID
    //   formRef.current,
    //   "YOUR_USER_ID" ===> from Integration
    // );
    EmailJS.sendForm(
      //RESTART THE SERVICE
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_USER_ID
    )
      .then((result) => {
        console.log(result.text); //if we get OK  message it we works
        if (result.text === "OK") {
          setStatus(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="contact-all">
      <div className="contact-page">
        <h1>Contact Us</h1>
        {status ? (
          <h1>Thanks for your email</h1>
        ) : (
          <form className="form" ref={formRef} onSubmit={sendEmail}>
            <label>Name:</label>
            <br />
            <input type="text" name="name_name" />
            <br />
            <br />
            <label>Email:</label>
            <br />
            <input type="email" name="user_email" />
            <br />
            <br />
            <label htmlFor="textarea">Message:</label>
            <br />
            <textarea
              name="message"
              id="textarea"
              cols="30"
              rows="10"
            ></textarea>
            <br />
            <button className="button-contact">Send</button>
            <br />
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
