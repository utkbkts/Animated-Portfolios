import React from "react";
import "../contact.scss";
const Contacform = () => {
  return (
    <div className="contact-form-content">
      <form action="">
        <div className="name-container">
          <input type="text" name="firstname" placeholder="FirstName" />
          <input type="text" name="lastname" placeholder="LastName" />
        </div>
        <div className="email-container">
          <input type="email" name="email" placeholder="Email" id="" />
          <textarea placeholder="Message" name="message" rows={3}></textarea>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contacform;
