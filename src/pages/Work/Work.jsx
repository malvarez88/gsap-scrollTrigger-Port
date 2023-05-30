import React, { useState, useEffect, useRef } from "react";
import "./work.css";
import { projects } from "../../utils/constants";

import { gsap } from "gsap";

const Modal = ({ project, openModal }) => {

  const modalRef = useRef(null);

  useEffect(() => {
    const modalElement = modalRef.current;

    gsap.to(modalElement, {
      y: 500,
      duration: 0.3,
      ease: "none",
    });

    return () => {
      gsap.killTweensOf(modalElement);
    };
  }, []);
  return (
    <>
      <div className="modal" ref={modalRef}>
        <div className="dialog">
          <span className="close" onClick={openModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
            </svg>
          </span>
          <img src={project.image} alt="" className="modal__img" />
          <div className="work__text">
            <h1>{project.title}</h1>
            <div className="description">{project.description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const Work = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        openModal(!isOpen);
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="container work__container">
      <div className="work__gallery">
        <div className="work__title">
          <h1 className="title">Projects</h1>
        </div>
        {projects.map((project, index) => (
          <>
            <div className="work__anchor" key={index}>
              <img
                src={project.image}
                alt={project.slug}
                className="work__img"
                onClick={openModal}
              />
              <span className="layer"></span>
              <span className="text">{project.slug}</span>
            </div>
            {isOpen && (
              <Modal
                project={project}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                openModal={openModal}
              />
            )}
          </>
        ))}
      </div>
      {isOpen && <div className="backdrop"></div>}
    </div>
  );
};

export default Work;
