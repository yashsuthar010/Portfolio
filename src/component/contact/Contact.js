import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import contactbg from "../../assests/contactbg.svg";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { SiMinutemailer } from "react-icons/si";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qgwltp4",
        "template_rymbl2k",
        form.current,
        "CRPSL52F-Uc-uxxK9"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message has been sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="contact">
        <div className="contact-container">
          <div className="contact-one">
            <h2>Get in Touch!</h2>
            <p>
              Have a project for me? I'd love to hear from you, give me a shout
              <br />
              by email or by using the contact form.
            </p>
            <div className="svg">
              <img src={contactbg}></img>
            </div>
          </div>
          <div className="contact-two">
            <h2>Contact</h2>
            <ul className="contact-icons">
              <li>
                <a href="https://github.com/yashsuthar010">
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a href="https://github.com/yashsuthar010">
                  <FiLinkedin />
                </a>
              </li>
              <li>
                <a href="https://github.com/yashsuthar010">
                  <SiMinutemailer />
                </a>
              </li>
              <li>
                <a href="https://github.com/yashsuthar010">
                  <AiFillTwitterCircle />
                </a>
              </li>
            </ul>

            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input
                placeholder="Name"
                type="text"
                name="user_name"
                required
              />{" "}
              <br />
              <label>Email</label>
              <input
                placeholder="Email"
                type="email"
                name="user_email"
                required
              />
              <br />
              <label>Message</label>
              <textarea type="message" placeholder="Message" name="message" />
              <br />
              <button type="submit" value="Send" id="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
