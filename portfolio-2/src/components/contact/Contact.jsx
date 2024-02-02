import React from "react";
import "./contact.scss";
import ContactCard from "./contactcard/ContactCard";
import Contacform from "./contactform/Contacform";
const Contact = () => {
  return (
    <section className="contact-container">
      <h3>Contact Me</h3>
      <div className="contact-content">
        <div className="content">
          <ContactCard
            iconUrl={"/src/assets/icons8-github-150.png"}
            text={"@utkbkts"}
          />
          <ContactCard
            iconUrl={"/src/assets/icons8-google-144.png"}
            text={"utkutoygunbektasoglu@gmail.com"}
          />
        </div>
        <div className="content-wrap">
          <Contacform/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
