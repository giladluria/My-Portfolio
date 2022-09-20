import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsWhatsapp } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/gilad-luria-002207225/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/giladluria" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=972503473121"
        target="_blank"
        rel="noreferrer"
      >
        <BsWhatsapp />
      </a>
    </div>
  );
}

export default HeaderSocials