import React, { useState } from "react";
import contactStyle from "./contactStyle.module.scss";
import whiteLayer from "../../Assets/products/whiteLayer.png";
import axios from "axios";

let axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mail: "",
    phoneNumber: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // setBtnDisabled(true);
    console.log(formData);
    var finalData = {
      // to: "vasupokhriyal123@gmail.com",
      // text: "here i am",
      ...formData,
      html: `<html> first Name: ${formData.firstName}<br/>, Last Name: ${formData.lastName}<br/>, mail: ${formData.mail}<br/>, contact: ${formData.phoneNumber}<br/>, message: ${formData.description}</html>`,
     
    };

    axios
      .post(
        "https://0nnskpj0xd.execute-api.us-east-1.amazonaws.com/dev/api/emails",
        finalData,
        axiosConfig
      )
      .then((res) => {
        // setMessage("Contact Request Sent");
        // toast.success("Thank you for contacting us!");
        setFormData({
          firstName: "",
          lastName: "",
          mail: "",
          phoneNumber: "",
          description: "",
        });
        
      })
      .catch((err) => {
        console.log(err);
  
      });
    // setBtnDisabled(false);
  };


  return (
    <div className={contactStyle.contactContainer}>
      <div className={contactStyle.bgContainer}>
        <img src={whiteLayer} alt="the white layer" />
      </div>
      <div className={`container-fluid ${contactStyle.formContainer}`}>
        <h1>Contact US</h1>
        <p>
          Please fill out the form below. Someone from our team will contact you
          soon!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className={`col-md-6 col-lg-6 ${contactStyle.inputColumns}`}>
              <label for="firstName">First Name</label>
              <br />
              <input
                required
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                className={contactStyle.formFields}
                onChange={handleChange}
              />
            </div>
            <div className={`col-md-6 col-lg-6 ${contactStyle.inputColumns}`}>
              <label for="lastName">Last Name</label>
              <br />
              <input
                required
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                className={contactStyle.formFields}
                onChange={handleChange}
              />
            </div>
            <div className={`col-md-6 col-lg-6 ${contactStyle.inputColumns}`}>
              <label for="mail">Email ID</label>
              <br />
              <input
                type="email"
                id="mail"
                name="mail"
                placeholder="Email ID"
                value={formData.mail}
                className={contactStyle.formFields}
                onChange={handleChange}
              />
            </div>
            <div className={`col-md-6 col-lg-6 ${contactStyle.inputColumns}`}>
              <label for="phoneNumber">Phone Number</label>
              <br />
              <input
                required
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone No."
                value={formData.phoneNumber}
                className={contactStyle.formFields}
                onChange={handleChange}
              />
            </div>

            <div className={`col-md-12 col-lg-12 ${contactStyle.textField}`}>
              <p>
                What products do you plan on packaging? Please let us know how
                we can help!
              </p>
              <textarea
                required
                name="message"
                placeholder="Write a description"
                valueo={formData.description}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit">
            <p>Submit</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
