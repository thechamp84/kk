import React from "react";
import contactStyle from "./contactStyle.module.scss";
import whiteLayer from "../../Assets/products/whiteLayer.png";

const ContactUs = () => {
  return (
    <div className={contactStyle.contactContainer}>
  
    <img src={whiteLayer} alt="the white layer"/>
      <div className={`container-fluid ${contactStyle.formContainer}`}>
        <h1>Contact US</h1>
        <p>Please fill out the form below. Someone from our team will contact you soon!</p>

        <form>
          <div className="row">
            <div className={`col-md-6 col-lg-6 ${contactStyle.inputColumns}`}>
              <label for="firstName">First Name</label>
              <br />
              <input type="text" id="firstName" name="firstName" placeholder="First Name" className={contactStyle.formFields} />
            </div>
            <div className={`col-md-6 col-lg-6 ${contactStyle.inputColumns}`}>
              <label for="lastName">Last Name</label>
              <br />
              <input type="text" id="lastName" name="lastName" placeholder="Last Name" className={contactStyle.formFields} />
            </div>
            <div className={`col-md-6 col-lg-6 ${contactStyle.inputColumns}`}>
              <label for="mail">Email ID</label>
              <br />
              <input type="email"  id="mail" name="mail" placeholder="Email ID" className={contactStyle.formFields} />
            </div>
            <div className={`col-md-6 col-lg-6 ${contactStyle.inputColumns}`}>
              <label for="phoneNumber">Phone Number</label>
              <br />
              <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone No." className={contactStyle.formFields} />
            </div>

            <div className={`col-md-12 col-lg-12 ${contactStyle.textField}`}>
              <p>What products do you plan on packaging? Please let us know how we can help!</p>
              <textarea name="message" placeholder="Write a description"/>
            </div>    
          </div>

          <button type="submit"><p>Submit</p></button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
