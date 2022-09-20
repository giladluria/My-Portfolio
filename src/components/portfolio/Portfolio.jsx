import React from 'react';
import Crypto from "../../assets/crypto.png";
import Recipe from "../../assets/recipe.jpg";
import Loan from "../../assets/loan.jpg";

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Cryptocurrency Portfolio Manager",
      img: Crypto,
      description:
        "This website was designed to enable easier tracking of your favorite cryptocurrencies. add coins and see their growth, track coins that might be worth buying and search data for the entire crypto space.",
      technologies: "Vue.js | Quasar | Firebase | CoinGecko API",
      link: "https://www.youtube.com/watch?v=x7bBKBu33hY",
      github: "https://github.com/giladluria",
    },
    {
      id: 2,
      title: "Recipe List",
      img: Recipe,
      description:
        "Recipe List app that lets you create, delete and update recipes, while using Firebase Firestore for the database.",
      technologies: "CSS | React | Firebase",
      link: "https://recipe-list-a2943.web.app/",
      github: "https://github.com/giladluria/Loan-Calculator",
    },
    {
      id: 3,
      title: "Loan Calculator",
      img: Loan,
      description:
        "A calculator that helps people figure out the size of the loan they can afford, taking into consideration multiple variables.",
      technologies: "JavaScript | Vue.js | Quasar",
      link: "https://loan-calc-c8ffa.firebaseapp.com/#/Home",
      github: "https://github.com/giladluria/Loan-Calculator",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
