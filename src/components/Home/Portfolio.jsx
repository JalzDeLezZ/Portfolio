import React, { Fragment, useContext } from "react";
import { AllContext } from "../../Context/store";
import "./styles/portfolio.scss";
import { Portal } from "../../components/Home/Portal";
import { PortalContent } from "../../components/Home/PortalContent.jsx";

const { DB_Portofolio } = require("./../../assets/data/DB_Portofolio.js");

const Portfolio = () => {
  const {
    state: { s_modal },
    xDispatch,
  } = useContext(AllContext);

  const mShowModal = (pObj) => {
    xDispatch({ type: "TOGGLE", payload: pObj });
  };

  return (
    <Fragment>
      {!!s_modal ? (
        <Portal>
          <PortalContent />
        </Portal>
      ) : null}

      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {DB_Portofolio?.map((pI) => (
            <article key={pI.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={pI.image} alt={pI.title} />
              </div>
              <h3>{pI.title}</h3>
              <div className="portfolio__item-cta">
                {pI.buttons?.map((pII) => {
                  switch (pII) {
                    case "Demo":
                      return (
                        <button
                          type="button"
                          className="btn liveDemo"
                          onClick={() => {
                            mShowModal(pI);
                          }}
                        >
                          Live Demo
                        </button>
                      );
                    case "External":
                      return (
                        <a className="btn" href={pI.url} target="_blank">
                          External Demo
                        </a>
                      );
                    case "Github":
                      return (
                        <a href={pI.github} className="btn" target="_blank">
                          GitHub
                        </a>
                      );
                    case "Deploy":
                      return (
                        <a href={pI.deploy} className="btn" target="_blank">
                          Deploy
                        </a>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            </article>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Portfolio;

/* 

                  switch (pII) {
                    case "Demo":
                      <button
                        type="button"
                        className="btn liveDemo"
                        onClick={() => {
                          mShowModal(pI);
                        }}
                      >
                        Live Demo
                      </button>;
                      break;
                    default:
                      break;

<a href={github} className="btn" target="_blank">
                GitHub
              </a>
              
<a
  href={demo}
  className="btn"
  target="_blank"
>
  Live Demo
</a>
*/
