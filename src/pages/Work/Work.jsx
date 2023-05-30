import React, { useRef, useState } from "react";
import "./work.css";
import { projects } from "../../utils/constants";

const Modal = ({ project, setIsOpen, isOpen }) => {
console.log(project)

  return (
    <div className="modal">
      <div className="dialog">
        <span className="close">
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
        <img src="" alt="" />
        <div className="work__text">
          <h1>{project.title}</h1>
          <div className="description">
           {project.description}
          </div>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
    const [isOpen, setIsOpen] = useState(false)


    // const openModal = () => {
    //     setIsOpen(!isOpen)
    // }

  return (
    <div className="container work__container">
      <div className="work__gallery">
        <div className="work__title">
          <h1 className="title">Projects</h1>
        </div>
        {projects.map((project, index) => (
            <div className="work__anchor" key={index}>
            <img src={project.image} alt={project.slug} className="work__img" />
            <span className="layer"></span>
            <span className="text">{project.slug}</span>
            <Modal project={project} setIsOpen={setIsOpen} isOpen={isOpen}/>
            </div>
        ))}
      </div>

      <div className="backdrop"></div>
    </div>
  );
};

export default Work;
