import React, { useEffect, useRef } from "react";
import "./hero.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mariano from "../../assets/MA.png";

const Hero = () => {
  const wrapperRef = useRef(null);


  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sections = gsap.utils.toArray("section");

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: wrapperRef.current,
        pin: true,
        markers: true,
        scrub: true,
        snap: 1 / (sections.length - 1),
        start: "top top",
        end: 3000,
      },
    });
  }, []);

  return (
    <>
      <div className="logo">
        Front
        <br />
        end
        <br />
        Developer
      </div>

      <div className="wrapper" ref={wrapperRef}>
        <section className="intro">
          <div className="line"></div>
        </section>

        <section className="character mariano">
          <div className="block"></div>
          <img src={mariano} alt="" />
          <span className="huge-text">Mariano</span>
          <div className="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            quas assumenda illo a, quibusdam in dolor odio sed, id porro
            inventore quam esse iure minima accusantium, delectus quo reiciendis
            placeat.
          </div>
          <div className="nickname">
            <span>MAD</span>
          </div>
          <div className="quote">Some quote</div>
        </section>

        <section className="character mariano-2">
          <div className="block"></div>
          <img src={mariano} alt="" />
          <span className="huge-text">Mariano</span>
          <div className="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            quas assumenda illo a, quibusdam in dolor odio sed, id porro
            inventore quam esse iure minima accusantium, delectus quo reiciendis
            placeat.
          </div>
          <div className="nickname">
            <span>MAD-2</span>
          </div>
          <div className="quote">some other quote</div>
        </section>
      </div>
    </>
  );
};

export default Hero;
