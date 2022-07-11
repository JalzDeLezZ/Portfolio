import React, { useRef } from "react";
import "./styles/contact.scss";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";
// import emailjs from 'emailjs-com';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gbxsc8t",
        "template_j4apbo8",
        form.current,
        "hyCvfLdJQwCIJBLRN"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>j4ko.dele@gmail.com</h5>
            <a target="_blank" href="mailto:jako.dele@gmail.com">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>James Jalz</h5>
            <a target="_blank" href="https://m.me/Urik.J4LZ.DeLe">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+51 900 284 446</h5>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=+51900284446"
            >
              Send a message
            </a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

/* 
emailjs.send("service_gbxsc8t","template_j4apbo8",{
name: "MY NAME",
email: "test@mail.com",
message: "This is a message fron ♥ C",
});
*/
