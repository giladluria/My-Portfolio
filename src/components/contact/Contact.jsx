import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import './contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h3>Email</h3>
            <h4>giladluria@gmail.com</h4>
            <a
              href="mailto:giladluria@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h3>WhatsApp</h3>
            <h4>050-3473121</h4>
            <a
              href="https://api.whatsapp.com/send?phone=972503473121"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option-icon" />
            <h3>linkedin</h3>
            <h4>Visit My Profile</h4>
            <a
              href="https://www.linkedin.com/in/gilad-luria-002207225/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
