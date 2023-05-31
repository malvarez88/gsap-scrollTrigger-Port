import React, { useEffect, useRef } from "react";
import "./hero.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import WordAnimation from "../../components/wordAnimation/wordAnimation";
// import mariano from "../../assets/MA.png";

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

    // return () => {
    //   scrollTween.kill();
    // };
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
      scrollTween.kill();
    };
  }, []);

  return (
    <>
      <div className="logo" ref={logoRef}>
        <WordAnimation word="Mariano.Dev" translate={"225px"} axis={"y"} />
      </div>
      <div className="wrapper" ref={wrapperRef}>
        <section className="intro">
          <div className="line" ref={lineRef}></div>
         
        </section>

        <section className="character mariano">
          <div className="block" ref={blockRef1}></div>
          {/* <img src={mariano} alt="" ref={imgRef1}/> */}
          <span className="huge-text" ref={nameRef1}>
            Frontend
          </span>
          <div className="caption" ref={captionRef1}>
            Like this portfolio made with React and Gsap
          </div>
          <div className="page" ref={nickRef1}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z" />
              </svg>
            </span>
          </div>
          <div className="quote" ref={quoteRef1}>
            I enjoy trying new things
          </div>
        </section>

        <section className="character mariano-2">
          <div className="block" ref={blockRef2}></div>
          {/* <img src={mariano} alt="" ref={imgRef2}/> */}
          <span className="huge-text" ref={nameRef2}>
            Developer
          </span>
          <div className="caption" ref={captionRef2}>
            Or not... rigth?
          </div>
          <div className="page" ref={nickRef2}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
              </svg>
            </span>
          </div>
          <div className="quote" ref={quoteRef2}>
            sometimes something great may come from those things
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
