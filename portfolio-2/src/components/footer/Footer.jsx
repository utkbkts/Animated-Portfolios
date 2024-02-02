import React from "react";
import "./footer.scss";
const Footer = () => {
  const day = new Date().getDay();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedmonth = day < 10 ? `0${month}` : day;
  const formatDate = formattedDay + "/" + formattedmonth + "/" + year;
  return (
    <div className="footer">
     <span> &copy;{formatDate}<p>utku bektasoglu</p></span>
    </div>
  );
};

export default Footer;
