import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import contactbg2 from "../../assests/contactbg2.gif";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

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
              <span
                style={{ color: "red", fontWeight: "bold", fontSize: "1.2rem" }}
              >
                "
              </span>
              Have a project for me? I'd love to hear from you, give me a shout
              by
              <br />
              email or by using the contact form
              <span
                style={{ color: "red", fontWeight: "bold", fontSize: "1.2rem" }}
              >
                "
              </span>
            </p>
            <div className="svg">
              <img src={contactbg2}></img>
            </div>
          </div>
          <div className="contact-two">
            <h2>Contact</h2>
            <ul className="contact-icons">
              <li>
                <a href="https://github.com/yashsuthar010" target="_blank">
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yash-suthar005/"
                  target="_blank"
                >
                  <FiLinkedin />
                </a>
              </li>
              <li>
                <a href="gvice008@gmail.com" target="_blank">
                  <MdEmail />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/YashSut95822902" target="_blank">
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
