import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiVuejsFill } from "react-icons/ri";
import { SiQuasar } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { FaNode } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Technical Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h2>Front-end Development</h2>
          <div className="experience__content">
            <article className="experience__details">
              <FaHtml5 className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <RiVuejsFill className="experience__details-icon" />
              <h4>Vue.js</h4>
            </article>
            <article className="experience__details">
              <SiQuasar className="experience__details-icon" />
              <h4>Quasar</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h2>Back-end Development</h2>
          <div className="experience__content">
            <article className="experience__details">
              <FaNode className="experience__details-icon" />
              <h4>Node.js</h4>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <h4>Express.js</h4>
            </article>
            <article className="experience__details">
              <SiFirebase className="experience__details-icon" />
              <h4>Firebase</h4>
            </article>
            <article className="experience__details">
              <AiFillGithub className="experience__details-icon" />
              <h4>Git/GitHub</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience