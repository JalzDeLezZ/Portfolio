import React, { useContext } from "react";
import { AllContext } from "../../Context/store";
import "./styles/PortalContent.scss";

const PortalContent = () => {
  const { state: {s_element}, xDispatch } = useContext(AllContext);

  return (
    <div className="CMP-PortalContent" onClick={(e) => e.stopPropagation()}>
      <div className="cp_content-btn">
        <button
          className="cp_btn-exit"
          onClick={() => {
            xDispatch({ type: "TOGGLE" });
          }}
        >
          <span>x</span>
        </button>
      </div>
      <section className="cp_container">
        <h1>{s_element.title}</h1>
        <iframe
          className="PortalContent__iframe"
          src={s_element.demo}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </section>
    </div>
  );
};

export { PortalContent };
