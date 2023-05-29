import React, { useEffect, useRef } from "react";
import "./hero.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import mariano from "../../assets/MA.png";

const Hero = () => {
  const wrapperRef = useRef(null);
  const logoRef = useRef(null);
  const lineRef = useRef(null);
  const captionRef1 = useRef(null);
  const captionRef2 = useRef(null);
  const quoteRef1 = useRef(null);
  const quoteRef2 = useRef(null);
  const nickRef1 = useRef(null);
  const nickRef2 = useRef(null);
  const blockRef1 = useRef(null);
  const blockRef2 = useRef(null);
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const nameRef1 = useRef(null);
  const nameRef2 = useRef(null);


  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sections = gsap.utils.toArray("section");
    const current = wrapperRef.current;

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: current,
        pin: true,
        //   markers: true,
        scrub: true,
        snap: 1 / (sections.length - 1),
        start: "top top",
        end: "3000",
      },
    });

    gsap.to(logoRef.current, {
      fontSize: "2.5rem",
      top: "4rem",
      scrollTrigger: {
        trigger: logoRef.current,
        start: "top top",
        end: 1500,
        scrub: 0.5,
      },
    });

    gsap.to(lineRef.current, {
      height: "10rem",
      scrollTrigger: {
        trigger: lineRef.current,
        scrub: 0.5,
        start: "center center",
        end: 2000,
      },
    });

    gsap.to(captionRef1.current, {
      x: 0,
      y: 0,
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: captionRef1.current,
        start: "top bottom",
        end: "+=1000",
        scrub: 0.5,
      },
    });

    gsap.to(captionRef2.current, {
      x: 0,
      y: 0,
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: captionRef2.current,
        start: "top bottom",
        end: "+=1000",
        scrub: 0.5,
      },
    });

    gsap.to(quoteRef1.current, {
      x: 0,
      y: 0,
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: quoteRef1.current,
        start: "top bottom",
        end: "+=20%",
        scrub: 0.5,
      },
    });
    gsap.to(quoteRef2.current, {
      x: 0,
      y: 0,
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: quoteRef2.current,
        start: "top bottom",
        end: "+=20%",
        scrub: 0.5,
      },
    });

    gsap.to(nickRef1.current, {
      x: 0,
      y: 0,
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: nickRef1.current,
        start: "top bottom",
        end: "+=10%",
        scrub: 0.5,
      },
    });

    gsap.to(nickRef2.current, {
      x: 0,
      y: 0,
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: nickRef2.current,
        start: "top bottom",
        end: "+=10%",
        scrub: 0.5,
      },
    });

    gsap.to(blockRef1.current, {
      x: 0,
      y: 0,
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: blockRef1.current,
        start: "top bottom",
        end: "+=" + window.innerWidth,
        scrub: 0.5,
      },
    });

    gsap.to(blockRef2.current, {
      x: 0,
      y: 0,
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: blockRef2.current,
        start: "top bottom",
        end: "+=" + window.innerWidth,
        scrub: 0.5,
      },
    });

    gsap.to(imgRef1.current, {
        x: 0,
        y: 0,
        ease: "none",
        scrollTrigger: {
          containerAnimation: scrollTween,
          trigger: imgRef1.current,
          start: "top bottom",
          end: "+=50%",
          scrub: 0.5,
        },
      });
      gsap.to(imgRef2.current, {
        x: 0,
        y: 0,
        ease: "none",
        scrollTrigger: {
          containerAnimation: scrollTween,
          trigger: imgRef2.current,
          start: "top bottom",
          end: "+=50%",
          scrub: 0.5,
        },
      });

      gsap.to(nameRef1.current, {
        x: 0,
        y: 0,
        ease: "none",
        scrollTrigger: {
          containerAnimation: scrollTween,
          trigger: nameRef1.current,
          start: "top bottom",
          end: "+=100%",
          scrub: 0.5,
        },
      });

      gsap.to(nameRef2.current, {
        x: 0,
        y: 0,
        ease: "none",
        scrollTrigger: {
          containerAnimation: scrollTween,
          trigger: nameRef2.current,
          start: "top bottom",
          end: "+=100%",
          scrub: 0.5,
        },
      });


    return () => {
      scrollTween.kill();
    };
  }, []);

  return (
    <>
      <div className="logo" ref={logoRef}>
        Mariano <br/>Alvarez <br/>
        Frontend <br/> Developer
      </div>

      <div className="wrapper" ref={wrapperRef}>
        <section className="intro">
          <div className="line" ref={lineRef}></div>
        </section>

        <section className="character mariano">
          <div className="block" ref={blockRef1}></div>
          <img src={mariano} alt="" ref={imgRef1}/>
          <span className="huge-text" ref={nameRef1}>Developer</span>
          <div className="caption" ref={captionRef1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            quas assumenda illo a, quibusdam in dolor odio sed, id porro
            inventore quam esse iure minima accusantium, delectus quo reiciendis
            placeat.
          </div>
          <div className="nickname" ref={nickRef1}>
            <span>MAD</span>
          </div>
          <div className="quote" ref={quoteRef1}>
            Some quote
          </div>
        </section>

        <section className="character mariano-2">
          <div className="block" ref={blockRef2}></div>
          <img src={mariano} alt="" ref={imgRef2}/>
          <span className="huge-text" ref={nameRef2}>Designer</span>
          <div className="caption" ref={captionRef2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            quas assumenda illo a, quibusdam in dolor odio sed, id porro
            inventore quam esse iure minima accusantium, delectus quo reiciendis
            placeat.
          </div>
          <div className="nickname" ref={nickRef2}>
            <span>MAD-2</span>
          </div>
          <div className="quote" ref={quoteRef2}>
            some other quote
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
