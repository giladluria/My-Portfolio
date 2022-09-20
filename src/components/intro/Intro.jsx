import React from 'react';
import { BsEye } from "react-icons/bs";
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsEye className="about__icon" />
              <h5>Looking For</h5>
              <small>Full-Stack Developer Position</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            For the last eight years I’ve been working in Bank of Jerusalem,
            filling a wide variety of roles. I started as a call center
            representative all the way up to a managerial position. For the last
            two years I’ve been multitasking as customer service manager,
            training manager and information system admin. However, I wanted to
            utilize my skills in a different, better way. I joined a bootcamp
            for full stack developers, although I had no background in
            programming. I completed the course with some great projects and I’m
            really looking forward to starting my new career.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro