import React, { useRef, useState } from "react";
import "./Contact.css";
import walmart from "../../assets/walmart.png";
import adobe from "../../assets/adobe.png";
import facebook from "../../assets/facebook.png";
import microsoft from "../../assets/microsoft.png";
import facebook_icon from "../../assets/facebook-icon.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import instagram from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [capVal, setCapVal] = useState(null);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xtib35q",
        "template_p5evi2b",
        form.current,
        "jKhHRvLAf0qlKkpTY"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email has been sent successfully !");
        },
        (error) => {
          console.log(error.text);
          e.target.reset();
          alert("Email has not been sent, try later !");
        }
      );
  };

  return (
    <section id="contact-page">
      <div id="clients">
        <h1 className="clients-page-title">My clients</h1>
        <p className="clients-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br /> Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s
        </p>
        <div className="clients-imgs">
          <img src={walmart} alt="walmart" className="client-img" />
          <img src={adobe} alt="adobe" className="client-img" />
          <img src={facebook} alt="facebook" className="client-img" />
          <img src={microsoft} alt="microsoft" className="client-img" />
        </div>
      </div>
      <div id="contact">
        <h1 className="clients-page-title">Contact Me</h1>
        <p className="clients-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <ReCAPTCHA
            className="captcha"
            sitekey="6LdPIGYpAAAAANyGRqhinsJe99Y46YzdAoE7DSdK"
            onChange={(val) => setCapVal(val)}
          />
          <button
            disabled={!capVal}
            type="submit"
            value={"Send"}
            className="submit-btn"
          >
            Submit
          </button>
          <div className="links">
            <img src={facebook_icon} alt="facebook" className="link" />
            <img src={instagram} alt="instagram" className="link" />
            <img src={twitter} alt="twitter" className="link" />
            <img src={youtube} alt="youtube" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
