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
          {DB_Portofolio?.map((pI,i) => (
            <article key={i} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={pI.image} alt={pI.title} />
              </div>
              <h3>{pI.title}</h3>
              <div className="portfolio__item-cta">
                {pI.buttons?.map((pII,i) => {
                  switch (pII) {
                    case "Demo":
                      return (
                        <button
                          key={i}
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
                        <a key={i} className="btn" href={pI.url} target="_blank" rel="noreferrer">
                          External Demo
                        </a>
                      );
                    case "Github":
                      return (
                        <a key={i} href={pI.github} className="btn" target="_blank" rel="noreferrer">
                          GitHub
                        </a>
                      );
                    case "Deploy":
                      return (
                        <a key={i} href={pI.deploy} className="btn" target="_blank" rel="noreferrer">
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
rel="noopener"evita que la nueva página pueda acceder a la window.openerpropiedad y garantiza que se ejecute en un proceso separado.
rel="noreferrer"tiene el mismo efecto pero también evita que el Refererencabezado se envíe a la nueva página.
*/
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
